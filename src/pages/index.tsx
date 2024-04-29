import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`h-screen w-screen flex items-center justify-center bg-gray-100 `}> 
      <div className={`w-80`}>
        <h2 className={`text-lg font-bold text-center mb-4`}>Login</h2>

        <div className={`bg-white shadow-md rounded-md p-6 space-y-4`}>
          <div>
            <label 
              htmlFor="email"
              className={`block text-sm text-gray-800 mb-1 pt-2`}
            >E-mail</label>
            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="email" type="text"/>
          </div>

          <div>
            <label 
              htmlFor="password"
              className={`block text-sm text-gray-800 mb-1 pt-2`}
            >Senha</label>
            <input className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="text" />
          </div>

          <div className="text-right">
              <a href="" className={`text-sm text-gray-500 hover:underline`}>Esqueci minha senha</a>
            </div>

          <div>
          <button className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>Login</button>
          </div>

        </div>
      </div>
    </main>
  );
}
