export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            DYM MEDICAL CENTER VIETNAM
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            DYM Medical Center Vietnam, thuộc sở hữu của DYM Group, tự hào có
            mặt tại 5 quốc gia lớn: Nhật Bản, Thái Lan, Hoa Kỳ, Hồng Kông và
            Việt Nam.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Là cơ sở y tế đầu tiên được đầu tư toàn bộ vốn từ Nhật Bản, DYM đặt
            khách hàng làm trọng tâm đảm bảo mang lại kết quả chính xác trong
            lĩnh vực y khoa. Cùng với đó là hàng loạt dịch vụ khám chữa bệnh
            toàn diện, chất lượng cao.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Phòng khám đạt tiêu chuẩn Nhật Bản cùng đội ngũ y bác sĩ giàu kinh
            nghiệm, cam kết luôn làm việc chăm chỉ và tận tụy để nâng cao sức
            khỏe cho cộng đồng.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/themesberg/landwind"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Đặt lịch
            </a>
            <a
              href="https://www.facebook.com/dymmedicalcentervn/"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              target="_blank"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://dymmedicalcenter.com.vn/wp-content/uploads/2024/01/img27.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}
