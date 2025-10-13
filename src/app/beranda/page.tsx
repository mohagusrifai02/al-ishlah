'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Pagination from "../blog/pagination";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/protectedroute";
import Image from "next/image";
import { useCallback } from "react";


type Blog = {
    _id:string;
    title:string;
    imageUrl:string;
    slug:string;
    content:string;
};

const Beranda = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [pesan, setPesan] = useState<string>('');
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | null>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleEdit = (blog: Blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setImageUrl(null); // gambar dari server tidak bisa langsung dimasukkan ke File
    setEditId(blog._id);
    setEditMode(true);
    setPesan('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  if (imageUrl) {
    formData.append('image', imageUrl);
  }

  try {
    const token = localStorage.getItem("token"); // ambil token jika diperlukan

    const config = {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }) // hanya kirim jika token ada
        // Jangan set Content-Type secara manual!
      }
    };

    if (editMode && editId !== null) {
      await axios.put(
        `https://api-alishlah-production.up.railway.app/api/auth/post/${editId}`,
        formData,
        config
      );
      setPesan('Blog berhasil diupdate');
    } else {
      await axios.post(
        'https://api-alishlah-production.up.railway.app/api/auth/post',
        formData,
        config
      );
      setPesan('Blog berhasil ditambahkan');
    }

    // Reset form
    setTitle('');
    setContent('');
    setImageUrl(null);
    setEditMode(false);
    setEditId(null);
    setRefreshKey(prev => prev + 1);
    fetchBlog();
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.error('Error simpan blog:', error.response?.data || error.message);
  } else {
    console.error('Error tidak terduga:', error);
  }
  setPesan('Gagal menyimpan blog');
  }
};


const fetchBlog = useCallback(async () => {
  try {
    const response = await axios.get(
      `https://api-alishlah-production.up.railway.app/api/auth/post`
    );
    setBlogs(response.data.posts);
    setTotalPages(response.data.totalPages);
  } catch (error) {
    console.error('Error get data:', error);
  }
}, []);

useEffect(() => {
  fetchBlog();
}, [currentPage, refreshKey, fetchBlog]);

  const hapusBlog = async (id: string) => {
    const konfirmasi = window.confirm('Apakah Anda yakin akan menghapus ini?');
    if (!konfirmasi) return;

    try {
      await axios.delete(
        `https://api-alishlah-production.up.railway.app/api/auth/post/${id}`
      );
      fetchBlog();
    } catch (error) {
      console.error('Error hapus blog:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push('/');
  };

  return (
    <ProtectedRoute>
      <div className="container_dashboard">
        <div className="form-input">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <ul>
              <li>
                <label>Judul</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                  required
                />
              </li>
              <li>
                <label>Paragraf</label>
                <textarea
                  name="content"
                  cols={30}
                  rows={10}
                  value={content}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                  required
                ></textarea>
              </li>
              <li>
                <label>Gambar</label>
                <input
                  type="file"
                  name="imageUrl"
                  accept="image/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setImageUrl(e.target.files ? e.target.files[0] : null)
                  }
                  required
                />
              </li>
              <li>
                <button type="submit">{editMode ? 'Update' : 'Post'}</button>
              </li>
            </ul>
          </form>
        </div>
        <div className="blog-dashboard">
          <button onClick={handleLogout}>Logout</button>
          <div className="pesan">
            {pesan && <p>{pesan}</p>}
          </div>
          <table border={0} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>No</th>
                <th>Gambar</th>
                <th>Judul</th>
                <th colSpan={2}>Sunting</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog._id}</td>
                  <td className="gambar">
                    <Image
                      src={`https://api-alishlah-production.up.railway.app${blog.imageUrl}`}
                      width={50}
                      height={50}
                      alt="thumbnail"
                    />
                  </td>
                  <td>{blog.title}</td>
                  <td>
                    <button onClick={() => hapusBlog(blog._id)}>Hapus</button>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(blog)}>Edit</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={6}>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page: number) => setCurrentPage(page)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRoute>

  );
}

export default Beranda;