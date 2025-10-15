'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/protectedroute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


type bmy = {
  _id: string;
  judul: string;
  penerimaan:number;
  pendidikan:number;
  sosial:number;
  dakwah:number;
  operasional:number;
};

const BerandaBMY = () => {
  const [pesan, setPesan] = useState<string>('');
  const [items, setItems] = useState<bmy[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | null>(null);
  const router = useRouter();
  const [formData, setFormData] = useState<bmy>({
  _id: '',
  judul: '',
  penerimaan: 0,
  pendidikan: 0,
  sosial: 0,
  dakwah: 0,
  operasional: 0,
  });

  
  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: name === 'judul' ? value : Number(value),
  }));
};

const tambahItem = async (e: FormEvent) => {
  e.preventDefault();
  try {
    await axios.post('https://api-alishlah-production.up.railway.app/api/auth/bmy-entry', formData);
    setPesan('Data berhasil ditambahkan');
    //onBlogAdded();
    setFormData({
      _id: '',
      judul: '',
      penerimaan: 0,
      pendidikan: 0,
      sosial: 0,
      dakwah: 0,
      operasional: 0,
    });
  } catch (error) {
    console.error('Gagal menambahkan data:', error);
    setPesan('Gagal menambahkan data');
  }
};

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `https://api-alishlah-production.up.railway.app/api/auth/bmy-entry`
      );
      setItems(response.data.Bmys);
    } catch (error) {
      console.error('Error get data:', error);
    }
};

  const hapusItem = async (_id: string) => {
    const konfirmasi = window.confirm('Apakah Anda yakin akan menghapus ini?');
    if (!konfirmasi) return;

    try {
      await axios.delete(
        `https://api-alishlah-production.up.railway.app/api/auth/bmy-entry/${_id}`
      );
      fetchItems();
    } catch (error) {
      console.error('Error hapus blog:', error);
    }
  };

  const editItem = (item: bmy) => {
  setEditMode(true);
  setEditId(item._id);
  setFormData(item);
  };

  const updateItem = async (e: FormEvent) => {
  e.preventDefault();
  if (editId === null) return;

  try {
    await axios.put(`https://api-alishlah-production.up.railway.app/api/auth/bmy-entry/${editId}`, formData);
    setPesan('Data berhasil diperbarui');
    setEditMode(false);
    setEditId(null);
    setFormData({
      _id: '',
      judul: '',
      penerimaan: 0,
      pendidikan: 0,
      sosial: 0,
      dakwah: 0,
      operasional: 0,
    });
  } catch (error) {
    console.error('Gagal update data:', error);
    setPesan('Gagal update data');
  }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push('/');
  };

  return (
    <ProtectedRoute>
      <div className="container_bmy">
        <form onSubmit={editMode ? updateItem:tambahItem} className="form-bmy">
          <ul>
            <li>
              <label htmlFor="judul">Judul</label>
              <input type="text" name="judul" value={formData.judul} onChange={handleChange} placeholder="Judul" required />
            </li>
            <li>
              <label htmlFor="penerimaan">Penerimaan</label>
              <input type="number" name="penerimaan" value={formData.penerimaan} onChange={handleChange} placeholder="Penerimaan" />
            </li>
            <li>
              <label htmlFor="pendidikan">Pendidikan</label>
              <input type="number" name="pendidikan" value={formData.pendidikan} onChange={handleChange} placeholder="Pendidikan" />
            </li>
            <li>
              <label htmlFor="sosial">Sosial</label>
              <input type="number" name="sosial" value={formData.sosial} onChange={handleChange} placeholder="Sosial" />
            </li>
            <li>
              <label htmlFor="dakwah">Dakwah</label>
              <input type="number" name="dakwah" value={formData.dakwah} onChange={handleChange} placeholder="Dakwah" />
            </li>
            <li>
              <label htmlFor="operasional">Operasional</label>
              <input type="number" name="operasional" value={formData.operasional} onChange={handleChange} placeholder="Operasional" />
            </li>
            <li>
              <button type="submit">{editMode ? 'update': 'tambah'}</button>
            </li>
          </ul>
        </form>
        <div className="data-dashboard">
          <button onClick={handleLogout}>Logout</button>
          <div className="pesan">
            {pesan && <p>{pesan}</p>}
          </div>
          <table border={0} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Penerimaan</th>
                <th>Pendidikan</th>
                <th>Sosial</th>
                <th>Dakwah</th>
                <th>Operasional</th>
                <th colSpan={2}>Sunting</th>
              </tr>
            </thead>
            <tbody>
                {items.map((item)=>(
                    <tr key={item._id}>
                        <td></td>
                        <td>{item.judul}</td>
                        <td>{item.penerimaan.toLocaleString('id-ID')}</td>
                        <td>{item.pendidikan.toLocaleString('id-ID')}</td>
                        <td>{item.sosial.toLocaleString('id-ID')}</td>
                        <td>{item.dakwah.toLocaleString('id-ID')}</td>
                        <td>{item.operasional.toLocaleString('id-ID')}</td>
                        <td>
                            <FontAwesomeIcon icon={faTrash} onClick={()=>hapusItem(item._id)}/>
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faEdit} onClick={()=>editItem(item)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRoute>

  );
}

export default BerandaBMY;