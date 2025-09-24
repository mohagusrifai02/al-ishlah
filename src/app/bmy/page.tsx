'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/protectedroute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

type bmyProps = {
  onBlogAdded: () => void;
};

type bmy = {
  id: number;
  judul: string;
  infak: number;
  kencleng:number;
  kotakinfak:number;
  zakat:number;
  penerimaan:number;
  pendidikan:number;
  sosial:number;
  dakwah:number;
  operasional:number;
};

const BerandaBMY = ({ onBlogAdded }: bmyProps) => {
  const [judul, setJudul] = useState<string>('');
  const [pesan, setPesan] = useState<string>('');
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [items, setItems] = useState<bmy[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  
  useEffect(() => {
    fetchItem();
  }, [currentPage, refreshKey]);

  const fetchItem = async () => {
    try {
      const response = await axios.get(
        `https://api-alishlah-production.up.railway.app/api/auth/bmy?page=${currentPage}&limit=4`
      );
      setItems(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error get data:', error);
    }
  };

  const hapusItem = async (id: number) => {
    const konfirmasi = window.confirm('Apakah Anda yakin akan menghapus ini?');
    if (!konfirmasi) return;

    try {
      await axios.delete(
        `https://api-alishlah-production.up.railway.app/api/auth/bmy/${id}`
      );
      fetchItem();
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
      <div className="container_bmy">
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
                <th>Infak</th>
                <th>Kencleng</th>
                <th>Kotak Infak</th>
                <th>Zakat</th>
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
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.judul}</td>
                        <td>{item.infak}</td>
                        <td>{item.kencleng}</td>
                        <td>{item.kotakinfak}</td>
                        <td>{item.zakat}</td>
                        <td>{item.penerimaan}</td>
                        <td>{item.pendidikan}</td>
                        <td>{item.sosial}</td>
                        <td>{item.dakwah}</td>
                        <td>{item.operasional}</td>
                        <td>
                            <FontAwesomeIcon icon={faTrash}/>
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faEdit}/>
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