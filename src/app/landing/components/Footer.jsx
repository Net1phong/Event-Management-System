import React from "react";

function Footer() {
  return (
    <div>
      <div className=" bg-white/50 h-fit">
        <div className="flex p-8">
          <div className="w-fit mr-12">
            <h1 className="text-xl font-bold text-white">Contact</h1>
            <p className="text-white">Ajt6504@gmail.com</p>
            <p className="text-white">tel : 098-7654321</p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">About us</h1>
            <p className="text-white">ทีมนี้ไม่มีอะไรดีเลย ขนาดชื่อยังไม่มี</p>
          </div>
        </div>
        <div className="flex justify-end">
          <img className="w-32" src="/LogoWithTitle.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
