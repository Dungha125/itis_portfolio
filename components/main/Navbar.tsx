"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

type Props = {
    linkto: string;
};

const Navbar: React.FC<Props> = ({ linkto }) => {
    const [showPopupLogin, setShowPopupLogin] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Kiểm tra trạng thái đăng nhập

    const pathname = usePathname();
    const router = useRouter();
    const isRegister = pathname === "/Register";

    // Kiểm tra token khi trang load
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const payload = new URLSearchParams({
                grant_type: "password",
                username: username,
                password: password,
                client_id: "string",
                client_secret: "string",
            });

            const response = await axios.post(
                "https://dev.lcdkhoacntt1-ptit.tech/api/authentication/token",
                payload,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Accept: "application/json",
                    },
                }
            );

            if (response.status === 200) {
                // Lưu token vào localStorage
                localStorage.setItem("accessToken", response.data.access_token);
                setShowPopupLogin(false);
                setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
                router.push("/Phongtruyenthong");
            }
        } catch (error) {
            console.error("Đăng nhập thất bại", error);
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setIsLoggedIn(false);
        router.push("/");
    };

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#ffffffd8] md:bg-[#03001417] md:backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href={`#${linkto}`} className="h-full w-auto flex flex-row items-center">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <span className="font-bold ml-[10px] hidden md:block text-blue-950">
                        LIÊN CHI ĐOÀN KHOA CÔNG NGHỆ THÔNG TIN 1
                    </span>
                </a>

                <div className="flex flex-row gap-2">
                    {isLoggedIn ? (
                        <>
                            <button onClick={() => router.push("/dashboard")} className="px-4 bg-green-500 rounded-md py-2 text-white font-bold">
                                Dashboard
                            </button>
                            <button onClick={handleLogout} className="px-4 bg-red-500 rounded-md py-2 text-white font-bold">
                                Đăng xuất
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setShowPopupLogin(true)}
                            className="px-4 bg-blue-500 rounded-md py-2 text-white font-bold"
                        >
                            Đăng nhập
                        </button>
                    )}
                </div>
            </div>

            {showPopupLogin && (
                <div className="w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50 fixed top-0 left-0">
                    <form
                        onSubmit={handleSubmit}
                        className="w-[550px] h-[250px] bg-white rounded-md shadow-md flex flex-col items-center justify-center"
                    >
                        <h2>Login</h2>
                        <label htmlFor="user" className="mb-4">
                            <span>Username: </span>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </label>
                        <label htmlFor="password" className="mb-4">
                            <span>Password: </span>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                                onClick={() => setShowPopupLogin(false)}
                            >
                                Hủy
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Navbar;
