export default function MetaTags() {
  const content =
    "Là cơ sở y tế đầu tiên được đầu tư toàn bộ vốn từ Nhật Bản, DYM đặt khách hàng làm trọng tâm đảm bảo mang lại kết quả chính xác trong lĩnh vực y khoa. Cùng với đó là hàng loạt dịch vụ khám chữa bệnh toàn diện, chất lượng cao.";
  const image =
    "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-04.jpg";
  const url = "https://dym-medical.vercel.app/";
  const title = "DYM Medical Center Việt Nam";
  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={content} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={content} />
      <meta property="twitter:image" content={image} />
    </>
  );
}
