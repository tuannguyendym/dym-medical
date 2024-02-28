import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Câu hỏi thường gặp
        </h2>
        <div className="max-w-screen-md mx-auto">
          <Accordion
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
            selectionMode="multiple"
          >
            <AccordionItem
              key="1"
              aria-label="Có thể thanh toán bằng thẻ tín dụng được không?"
              title="Có thể thanh toán bằng thẻ tín dụng được không?"
            >
              <div className="py-1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Có, bạn có thể thanh toán bằng thẻ VISA, MASTER, JCB và
                  UnionPay.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Cần lưu ý gì trước khi đi khám sức khoẻ tổng quát?"
              title="Cần lưu ý gì trước khi đi khám sức khoẻ tổng quát?"
            >
              <div className="py-1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng chuẩn bị các thông tin về tiền sử bệnh lý bản thân và
                  gia đình (nếu có)
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng mang theo phim x - quang cũ hoặc kết quả xét nghiệm,
                  đơn thuốc liên quan đến tình trạng sức khỏe hiện tại.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng sử dụng trang phục rộng rãi, thoải mái để việc thăm
                  khám được thuận tiện.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng vệ sinh cơ thể, tai, mũi, họng, vùng kín trước khi
                  đến khám để không làm ảnh hưởng đến tầm nhìn và sự quan sát
                  của bác sĩ.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng nhịn đói và không uống các loại nước có năng lượng
                  như nước có đường hoặc chất gây nghiện như trà, cà phê ít nhất
                  8 tiếng trước khi đi khám để đảm bảo kết quả các xét nghiệm
                  được chính xác.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Tôi có thể gửi hóa đơn cho công ty về chi phí điều trị không?"
              title="Tôi có thể gửi hóa đơn cho công ty về chi phí điều trị không?"
            >
              <div className="py-1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Nếu có hợp đồng giữa phòng khám DYM và công ty mà bạn làm
                  việc, bạn có thể gửi hóa đơn cho công ty. Ngoài ra, bạn vui
                  lòng cung cấp thông tin xuất hóa đơn đỏ tại quầy lễ tân.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Có bãi đậu xe không?"
              title="Có bãi đậu xe không?"
            >
              <div className="py-1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Có. Quý khách khám tại cơ sở Quận 1, vui lòng gửi xe dưới tầng
                  hầm của Mplaza Sài Gòn. Phòng khám DYM hỗ trợ gửi xe miễn phí
                  chỉ đối với xe máy.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Nữ giới cần chuẩn bị gì trước khi đi khám?"
              title="Nữ giới cần chuẩn bị gì trước khi đi khám?"
            >
              <div className="py-1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng chờ đến khi sạch kinh ít nhất 3 - 5 ngày trước khi
                  đến khám để đảm bảo chất lượng buổi khám phụ khoa và kết quả
                  các xét nghiệm liên quan được chính xác.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng không giao hợp, thụt rửa âm đạo hay đặt thuốc âm đạo
                  ít nhất 2 - 3 ngày để kết quả Paps smear (phết tết bào cổ tử
                  cung) được chính xác.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng thông báo ngay với chúng tôi nếu bạn đang mang thai
                  hoặc nghi ngờ mang thai vì một số xét nghiệm có thể không phù
                  hợp.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng uống nhiều nước và nhịn tiểu khoảng 01 giờ trước khi
                  thực hiện siêu âm phụ khoa qua ngã bụng. Trong trường hợp bạn
                  không thể nhịn tiểu được vui lòng thông báo đến nhân viên y tế
                  để được hỗ trợ.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng thông báo với chúng tôi trước khi thực hiện siêu âm
                  ngã âm đạo nếu bạn chưa lập gia đình.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Vui lòng không sử dụng lăn khử mùi hoặc các loại phấn ở vùng
                  da dưới cánh tay hoặc ngực nếu bạn thực hiện nhũ ảnh.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
