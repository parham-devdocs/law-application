import React from 'react';

const Profile = () => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto transition-transform duration-300 hover:shadow-xl mt-20"
      dir="rtl"
    >
      {/* Cover & Profile Picture */}
      <div className="relative bg-gradient-to-b from-blue-500 to-blue-600 h-32">
        <div className="absolute -bottom-16 right-1/2 transform translate-x-1/2">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="عکس پروفایل وکیل"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Personal Info */}
      <div className="pt-20 pb-8 px-6 text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">آرش سلطانی</h2>
        <p className="text-blue-500 font-medium">وکیل دادگستری</p>
        <p className="text-gray-600 text-sm">متخصص در حقوق کیفری و حقوق خانواده</p>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
          <div className="text-center">
            <span className="block font-semibold text-blue-500">989124687022</span>
            <span className="text-gray-500">شماره تماس</span>
          </div>
          <div className="text-center">
            <span className="block font-semibold text-blue-500"> ۸۷۴۵</span>
            <span className="text-gray-500">شماره بروانه</span>
          </div>
          <div className="text-center">
            <span className="block font-semibold text-blue-500">۱۵ سال</span>
            <span className="text-gray-500">تجربه</span>
          </div>
        </div>

        {/* Action Buttons */}
       
      </div>
    </div>
  );
};

export default Profile;