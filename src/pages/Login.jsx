import Input from "../components/Input";
import TextType from "../components/TypeText";
import FadeContent from "../components/FadeContent";
import { useState } from "react";
import api from "../utils/api";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await api.post("/users/signup", {
        username: form.username,
        email: form.email,
        password: form.password,
        passwordConfirm: form.passwordConfirm,
      });
      console.log("Response:", res.data);
    } catch (err) {
      console.log(err.response?.data?.error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-indigo-600 flex">
      <div className="flex-1 flex flex-col items-center justify-center ml-24">
        <img className="w-60 h-60 object-contain" src="/logo.png" alt="logo" />

        <p className="text-lg font-bold mb-10">Shopping</p>

        <TextType
          text={[
            "Nền tảng thương mại điện tử được yêu thích",
            "Mua sắm trực tuyến nhanh chóng",
            "Ưu đãi hấp dẫn mỗi ngày",
            "Trải nghiệm dễ dàng và tiện lợi",
          ]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="text-white text-4xl md:text-5xl lg:text-4xl font-extrabold tracking-tight leading-snug text-center"
        />
      </div>

      <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
        className="flex items-center justify-center pr-12 mr-20 ml-12 w-full max-w-md"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Đăng ký tài khoản
          </h2>

          <Input
            label="Username"
            name="username"
            placeholder="congbang1234"
            value={form.username}
            onChange={handleChange}
            error=""
          />
          <Input
            label="Email"
            name="email"
            placeholder="you@example.com"
            type="email"
            value={form.email}
            onChange={handleChange}
            error=""
          />
          <Input
            label="Mật khẩu"
            name="password"
            placeholder="••••••••"
            type="password"
            value={form.password}
            onChange={handleChange}
            error=""
          />
          <Input
            label="Xác nhận mật khẩu"
            name="passwordConfirm"
            placeholder="••••••••"
            type="password"
            value={form.passwordConfirm}
            onChange={handleChange}
            error=""
          />

          <button
            type="submit"
            className="cursor-pointer w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg 
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Đăng ký
          </button>

          <p className="text-sm text-gray-600 text-center">
            Đã có tài khoản?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Đăng nhập
            </a>
          </p>
        </form>
      </FadeContent>
    </div>
  );
}
