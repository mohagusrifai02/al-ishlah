"use client";

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const DonationCard = () => {
    const [amount, setAmount] = useState<number>(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const nominalPresets = [10000, 25000, 50000, 100000];

    const handleCheckout = async () => {
        if (amount < 1000) {
            setMessage("Minimal donasi adalah Rp 1.000");
            return;
        }
        if (!name || !email) {
            setMessage("Nama dan email wajib diisi");
            return;
        }

        setLoading(true);
        setMessage("");

        const payload = {
            amount: Number(amount),
            customer_name: name,
            customer_email: email,
            item_details: [
                {
                    id: "1",
                    price: Number(amount),
                    quantity: 1,
                    name: "Donasi"
                }
            ],
        };

        try {
            console.log("Sending payload:", payload);
            
            const response = await axios.post("http://localhost:8000/api/auth/checkout", payload);

            // Asumsi API mengembalikan URL pembayaran (seperti Midtrans/Stripe)
            if (response.data.redirect_url) {
                window.location.href = response.data.redirect_url;
            } else {
                setMessage("Checkout berhasil! Terima kasih atas bantuan Anda.");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error.response) {
                    console.error("Network Error/CORS: Periksa apakah backend mengizinkan CORS dari origin ini.");
                    setMessage("Gagal: Masalah koneksi atau CORS. Pastikan backend mengizinkan request.");
                } else {
                    console.error("Backend Error:", error.response.data);
                    setMessage(`Gagal: ${error.response.data.error || "Terjadi kesalahan pada server"}`);
                }
            } else {
                console.error("Unexpected Error:", error);
                setMessage("Gagal memproses donasi.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div 
            className="donation-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                border: '1px solid #ddd',
                borderRadius: '12px',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                maxWidth: '400px',
                margin: '20px auto'
            }}
        >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>Donasi Sekarang</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>Bantu kami untuk terus memberikan informasi bermanfaat.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                {nominalPresets.map((val) => (
                    <button
                        key={val}
                        onClick={() => setAmount(val)}
                        style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid salmon',
                            backgroundColor: amount === val ? 'salmon' : 'transparent',
                            color: amount === val ? '#fff' : 'salmon',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Rp {val.toLocaleString('id-ID')}
                    </button>
                ))}
            </div>

            <input
                type="number"
                placeholder="Nominal lainnya (Rp)"
                value={amount || ""}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    marginBottom: '20px',
                    boxSizing: 'border-box'
                }}
            />

            <input
                type="text"
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    marginBottom: '15px',
                    boxSizing: 'border-box'
                }}
            />

            <input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    marginBottom: '20px',
                    boxSizing: 'border-box'
                }}
            />

            <button
                onClick={handleCheckout}
                disabled={loading}
                style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                    backgroundColor: loading ? '#ccc' : '#28a745',
                    color: '#fff',
                    border: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? "Memproses..." : "Kirim Donasi"}
            </button>

            {message && <p style={{ marginTop: '15px', textAlign: 'center', color: message.includes('Gagal') ? 'red' : 'green' }}>{message}</p>}
        </motion.div>
    );
};

export default DonationCard;