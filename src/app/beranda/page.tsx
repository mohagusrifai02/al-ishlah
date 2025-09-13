'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Pagination from "../blog/pagination";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/protectedroute";

type BerandaProps = {
  onBlogAdded: () => void;
};

type Blog = {
  id: number;
  judul: string;
  kategori: string;
  paragraf: string;
  gambar: string;
};

const Beranda = ({ onBlogAdded }: BerandaProps) => {
  const [judul, setJudul] = useState<string>('');
  const [kategori, setKategori] = useState<string>('');
  const [paragraf, setParagraf] = useState<string>('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [pesan, setPesan] = useState<string>('');
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [waLinks, setWaLinks] = useState<string[]>([]);

  const handleEdit = (blog: Blog) => {
    setJudul(blog.judul);
    setKategori(blog.kategori);
    setParagraf(blog.paragraf);
    setGambar(null); // gambar dari server tidak bisa langsung dimasukkan ke File
    setEditId(blog.id);
    setEditMode(true);
    setPesan('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('kategori', kategori);
    formData.append('paragraf', paragraf);
    if (gambar) formData.append('gambar', gambar);

    try {
      if (editMode && editId !== null) {
        await axios.put(
          `https://api-alishlah-production.up.railway.app/api/auth/dashboard/${editId}`,
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        setPesan('Blog berhasil diupdate');
      } else {
        await axios.post(
          'https://api-alishlah-production.up.railway.app/api/auth/dashboard',
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        setPesan('Blog berhasil ditambahkan');

        //kirim whatsapp
        const slug = judul.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        const blogUrl = `https://al-ishlah-tau.vercel.app/blog/${slug}`;
        const message = `halo, saya baru saja memposting blog baru berjudul "${judul}"` +`. silahkan baca di ${blogUrl}`;
        const agus = '6289516589293';
        const murni = '6287785945412';
        const numbers = [agus, murni];

        const links = numbers.map((num)=>{
          return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
        });
        setWaLinks(links);
      }

      setJudul('');
      setKategori('');
      setParagraf('');
      setGambar(null);
      setEditMode(false);
      setEditId(null);
      setRefreshKey(prev => prev + 1);
      fetchBlog();
    } catch (error) {
      setPesan('Gagal menyimpan blog');
      console.error('Error simpan blog:', error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [currentPage, refreshKey]);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `https://api-alishlah-production.up.railway.app/api/auth/dashboard?page=${currentPage}&limit=4`
      );
      setBlogs(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error get data:', error);
    }
  };

  const hapusBlog = async (id: number) => {
    const konfirmasi = window.confirm('Apakah Anda yakin akan menghapus ini?');
    if (!konfirmasi) return;

    try {
      await axios.delete(
        `https://api-alishlah-production.up.railway.app/api/auth/dashboard/${id}`
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
                  name="judul"
                  value={judul}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setJudul(e.target.value)}
                  required
                />
              </li>
              <li>
                <label>Kategori</label>
                <select 
                  name="kategori" id=""
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setKategori(e.target.value)}
                  value={kategori}
                  required>
                    <option value="">Pilih Kategori</option>
                    <option value="artikel">Artikel</option>
                    <option value="program">Program</option>
                    <option value="berita">Berita</option>
                </select>
              </li>
              <li>
                <label>Paragraf</label>
                <textarea
                  name="paragraf"
                  cols={30}
                  rows={10}
                  value={paragraf}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setParagraf(e.target.value)}
                  required
                ></textarea>
              </li>
              <li>
                <label>Gambar</label>
                <input
                  type="file"
                  name="gambar"
                  accept="image/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setGambar(e.target.files ? e.target.files[0] : null)
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
            {waLinks.length > 0 && (
            <div style={{ marginTop:'1rem'}}>
              <p>Broadcast ke whatsapp</p>
              <ul>
                {waLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Kirim ke {link.split('/')[3].split('?')[0]};
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>
          <table border={0} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>No</th>
                <th>Gambar</th>
                <th>Judul</th>
                <th>Kategori</th>
                <th colSpan={2}>Sunting</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.id}</td>
                  <td className="gambar">
                    <img
                      src={`https://api-alishlah-production.up.railway.app/gmb/${blog.gambar}`}
                      width="50"
                      height="50"
                      alt="thumbnail"
                    />
                  </td>
                  <td>{blog.judul}</td>
                  <td>{blog.kategori}</td>
                  <td>
                    <button onClick={() => hapusBlog(blog.id)}>Hapus</button>
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