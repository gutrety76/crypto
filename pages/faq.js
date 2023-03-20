import NavBarForAd from "../components/NavBarForAd";
import Image from "next/image";
import {Collapse} from "@nextui-org/react";
import {useState} from "react";

export default function Faq() {
    const [selected, setSelected] = useState(0)
    return (<>
        <NavBarForAd/>
        <div className="flex flex-col items-center justify-center">
            <div className="text-5xl font-bold my-12">Frequently Asked Question</div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div
                    onClick={()=>{setSelected(0)}}
                    className={`${selected === 0? "bg-[#9880E7]": "bg-white"} hover:bg-[#9880E7] group shadow-2xl cursor-pointer duration-75 text-white h-[135px] rounded-md w-[265px] flex flex-col items-center justify-center`}>

                    <svg className={`fill-[${selected === 0 ? "#fff" :"#9880E7"}] bg-[${selected === 0 ? "#9880E7" : '#fff'}] fill-white group-hover:fill-[#fff]`} width="62" height="62" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M53.65 34.45C53.3924 34.6485 53.0752 34.7542 52.75 34.75C52.5171 34.75 52.2875 34.6957 52.0792 34.5916C51.8709 34.4875 51.6897 34.3362 51.55 34.15C50.6459 32.9347 49.4691 31.9487 48.1143 31.2713C46.7596 30.5939 45.2647 30.2441 43.75 30.25C43.3522 30.25 42.9707 30.0919 42.6893 29.8106C42.408 29.5293 42.25 29.1478 42.25 28.75C42.25 28.3521 42.408 27.9706 42.6893 27.6893C42.9707 27.408 43.3522 27.25 43.75 27.25C44.6037 27.249 45.4395 27.0053 46.1599 26.5472C46.8803 26.0891 47.4555 25.4356 47.8184 24.6628C48.1813 23.8901 48.3169 23.0301 48.2094 22.1832C48.1018 21.3363 47.7556 20.5374 47.2111 19.8799C46.6667 19.2224 45.9464 18.7333 45.1344 18.4698C44.3224 18.2062 43.4522 18.1791 42.6253 18.3915C41.7985 18.604 41.0491 19.0472 40.4648 19.6696C39.8804 20.2919 39.4851 21.0676 39.325 21.9062C39.2959 22.1067 39.2265 22.2993 39.1209 22.4722C39.0153 22.6452 38.8758 22.7949 38.7108 22.9125C38.5458 23.03 38.3586 23.1129 38.1607 23.1562C37.9627 23.1994 37.7581 23.2021 37.559 23.1641C37.36 23.126 37.1708 23.0481 37.0027 22.9349C36.8346 22.8217 36.6912 22.6757 36.5812 22.5055C36.4711 22.3354 36.3967 22.1448 36.3623 21.9451C36.3279 21.7454 36.3344 21.5408 36.3813 21.3437C36.6038 20.1771 37.1002 19.0801 37.8296 18.1428C38.5589 17.2056 39.5005 16.4549 40.5767 15.9527C41.6528 15.4505 42.8329 15.211 44.0198 15.2539C45.2066 15.2969 46.3663 15.6211 47.4033 16.1998C48.4404 16.7786 49.3252 17.5953 49.9849 18.5829C50.6446 19.5704 51.0603 20.7005 51.1979 21.8801C51.3355 23.0597 51.191 24.2551 50.7763 25.368C50.3616 26.4809 49.6885 27.4793 48.8125 28.2812C50.8512 29.1651 52.6225 30.568 53.95 32.35C54.0682 32.5075 54.1542 32.6869 54.2031 32.8777C54.252 33.0685 54.2628 33.2671 54.2349 33.4621C54.2071 33.6571 54.1411 33.8447 54.0407 34.0142C53.9404 34.1837 53.8076 34.3318 53.65 34.45V34.45ZM43.15 46.8437C43.3193 47.2025 43.3415 47.6132 43.2119 47.9882C43.0822 48.3631 42.811 48.6724 42.4563 48.85C42.2493 48.9421 42.0264 48.9931 41.8 49C41.5189 48.998 41.2439 48.9181 41.0056 48.7691C40.7673 48.6202 40.5749 48.408 40.45 48.1562C39.585 46.3868 38.2407 44.8959 36.57 43.853C34.8994 42.8101 32.9695 42.2572 31 42.2572C29.0305 42.2572 27.1006 42.8101 25.43 43.853C23.7593 44.8959 22.415 46.3868 21.55 48.1562C21.4639 48.3336 21.3437 48.4923 21.1963 48.6231C21.0488 48.754 20.877 48.8546 20.6907 48.919C20.5044 48.9834 20.3072 49.0105 20.1104 48.9987C19.9136 48.9868 19.721 48.9363 19.5438 48.85C19.189 48.6724 18.9178 48.3631 18.7882 47.9882C18.6585 47.6132 18.6807 47.2025 18.85 46.8437C20.244 43.9733 22.6085 41.6885 25.525 40.3937C24.0322 39.2495 22.9353 37.6663 22.3886 35.8666C21.8419 34.0669 21.8727 32.1412 22.4769 30.3599C23.081 28.5787 24.228 27.0314 25.7567 25.9357C27.2855 24.8399 29.1191 24.2506 31 24.2506C32.8809 24.2506 34.7146 24.8399 36.2433 25.9357C37.772 27.0314 38.919 28.5787 39.5232 30.3599C40.1273 32.1412 40.1581 34.0669 39.6114 35.8666C39.0647 37.6663 37.9678 39.2495 36.475 40.3937C39.3915 41.6885 41.756 43.9733 43.15 46.8437V46.8437ZM31 39.25C32.1867 39.25 33.3467 38.8981 34.3334 38.2388C35.3201 37.5795 36.0892 36.6424 36.5433 35.5461C36.9974 34.4497 37.1162 33.2433 36.8847 32.0794C36.6532 30.9155 36.0818 29.8464 35.2426 29.0073C34.4035 28.1682 33.3344 27.5968 32.1705 27.3652C31.0067 27.1337 29.8003 27.2526 28.7039 27.7067C27.6075 28.1608 26.6705 28.9298 26.0112 29.9165C25.3519 30.9032 25 32.0633 25 33.25C25.005 34.8397 25.6387 36.363 26.7628 37.4871C27.887 38.6113 29.4102 39.245 31 39.25V39.25ZM19.75 28.75C19.75 28.3521 19.592 27.9706 19.3107 27.6893C19.0294 27.408 18.6478 27.25 18.25 27.25C17.3963 27.249 16.5605 27.0053 15.8401 26.5472C15.1197 26.0891 14.5445 25.4356 14.1816 24.6628C13.8187 23.8901 13.6831 23.0301 13.7907 22.1832C13.8982 21.3363 14.2444 20.5374 14.7889 19.8799C15.3333 19.2224 16.0536 18.7333 16.8656 18.4698C17.6776 18.2062 18.5478 18.1791 19.3747 18.3915C20.2015 18.604 20.9509 19.0472 21.5353 19.6696C22.1196 20.2919 22.5149 21.0676 22.675 21.9062C22.7041 22.1067 22.7735 22.2993 22.8791 22.4722C22.9847 22.6452 23.1242 22.7949 23.2892 22.9125C23.4543 23.03 23.6414 23.1129 23.8393 23.1562C24.0373 23.1994 24.242 23.2021 24.441 23.1641C24.64 23.126 24.8292 23.0481 24.9973 22.9349C25.1654 22.8217 25.3088 22.6757 25.4188 22.5055C25.5289 22.3354 25.6034 22.1448 25.6377 21.9451C25.6721 21.7454 25.6656 21.5408 25.6188 21.3437C25.3962 20.1771 24.8998 19.0801 24.1705 18.1428C23.4411 17.2056 22.4995 16.4549 21.4234 15.9527C20.3472 15.4505 19.1671 15.211 17.9803 15.2539C16.7934 15.2969 15.6338 15.6211 14.5967 16.1998C13.5596 16.7786 12.6749 17.5953 12.0152 18.5829C11.3554 19.5704 10.9397 20.7005 10.8021 21.8801C10.6645 23.0597 10.809 24.2551 11.2237 25.368C11.6384 26.4809 12.3115 27.4793 13.1875 28.2812C11.1488 29.1651 9.37748 30.568 8.05001 32.35C7.81131 32.6682 7.70882 33.0683 7.76508 33.4621C7.82134 33.8559 8.03175 34.2113 8.35001 34.45C8.60765 34.6485 8.92478 34.7542 9.25001 34.75C9.48287 34.75 9.71254 34.6957 9.92083 34.5916C10.1291 34.4875 10.3103 34.3362 10.45 34.15C11.3541 32.9347 12.5309 31.9487 13.8857 31.2713C15.2404 30.5939 16.7353 30.2441 18.25 30.25C18.6478 30.25 19.0294 30.0919 19.3107 29.8106C19.592 29.5293 19.75 29.1478 19.75 28.75Z" />
                    </svg>

                    <span className={`${selected === 0? "text-white": "text-black"}  group-hover:text-white`}>About us</span>
                </div>
                <div
                    onClick={()=>{setSelected(1)}}
                    className={`${selected === 1? "bg-[#9880E7]": "bg-white"} hover:bg-[#9880E7] group shadow-2xl cursor-pointer duration-75 text-white h-[135px] rounded-md w-[265px] flex flex-col items-center justify-center`}>

                    <svg className={`fill-[${selected === 1 ? "#fff" :"#9880E7"}] fill-white group-hover:fill-[#fff]`} width="62" height="62"
                         viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M44.3333 14.3334H27.6667C26.3406 14.3334 25.0688 14.8602 24.1311 15.7978C23.1934 16.7355 22.6667 18.0073 22.6667 19.3334V31C22.6667 32.3261 23.1934 33.5979 24.1311 34.5356C25.0688 35.4733 26.3406 36 27.6667 36H44.3333C45.6594 36 46.9312 35.4733 47.8689 34.5356C48.8065 33.5979 49.3333 32.3261 49.3333 31V19.3334C49.3333 18.0073 48.8065 16.7355 47.8689 15.7978C46.9312 14.8602 45.6594 14.3334 44.3333 14.3334ZM46 31C46 31.4421 45.8244 31.866 45.5118 32.1786C45.1993 32.4911 44.7754 32.6667 44.3333 32.6667H27.6667C27.2246 32.6667 26.8007 32.4911 26.4881 32.1786C26.1756 31.866 26 31.4421 26 31V19.3334C26 18.8913 26.1756 18.4674 26.4881 18.1549C26.8007 17.8423 27.2246 17.6667 27.6667 17.6667H44.3333C44.7754 17.6667 45.1993 17.8423 45.5118 18.1549C45.8244 18.4674 46 18.8913 46 19.3334V31ZM40.1667 24.3334C39.5496 24.3355 38.9555 24.5672 38.5 24.9834C38.1416 24.6576 37.6963 24.443 37.2182 24.3655C36.7402 24.2881 36.2499 24.3512 35.807 24.5471C35.3641 24.7431 34.9876 25.0635 34.7234 25.4693C34.4591 25.8752 34.3185 26.3491 34.3185 26.8334C34.3185 27.3177 34.4591 27.7916 34.7234 28.1974C34.9876 28.6033 35.3641 28.9237 35.807 29.1196C36.2499 29.3156 36.7402 29.3786 37.2182 29.3012C37.6963 29.2238 38.1416 29.0091 38.5 28.6834C38.801 28.9569 39.1641 29.1529 39.558 29.2543C39.9519 29.3558 40.3645 29.3596 40.7602 29.2654C41.1558 29.1713 41.5226 28.982 41.8285 28.7141C42.1345 28.4461 42.3705 28.1076 42.516 27.7278C42.6615 27.348 42.7121 26.9384 42.6636 26.5346C42.615 26.1308 42.4686 25.745 42.2371 25.4106C42.0057 25.0762 41.6961 24.8032 41.3353 24.6155C40.9745 24.4278 40.5734 24.331 40.1667 24.3334V24.3334ZM37.6667 39.3334C37.2246 39.3334 36.8007 39.509 36.4881 39.8215C36.1756 40.1341 36 40.558 36 41V42.6667C36 43.1087 35.8244 43.5327 35.5118 43.8452C35.1993 44.1578 34.7754 44.3334 34.3333 44.3334H17.6667C17.2246 44.3334 16.8007 44.1578 16.4881 43.8452C16.1756 43.5327 16 43.1087 16 42.6667V36H17.6667C18.1087 36 18.5326 35.8244 18.8452 35.5119C19.1577 35.1993 19.3333 34.7754 19.3333 34.3334C19.3333 33.8913 19.1577 33.4674 18.8452 33.1549C18.5326 32.8423 18.1087 32.6667 17.6667 32.6667H16V31C16 30.558 16.1756 30.1341 16.4881 29.8215C16.8007 29.509 17.2246 29.3334 17.6667 29.3334C18.1087 29.3334 18.5326 29.1578 18.8452 28.8452C19.1577 28.5327 19.3333 28.1087 19.3333 27.6667C19.3333 27.2247 19.1577 26.8008 18.8452 26.4882C18.5326 26.1756 18.1087 26 17.6667 26C16.3406 26 15.0688 26.5268 14.1311 27.4645C13.1934 28.4022 12.6667 29.674 12.6667 31V42.6667C12.6667 43.9928 13.1934 45.2646 14.1311 46.2022C15.0688 47.1399 16.3406 47.6667 17.6667 47.6667H34.3333C35.6594 47.6667 36.9312 47.1399 37.8689 46.2022C38.8065 45.2646 39.3333 43.9928 39.3333 42.6667V41C39.3333 40.558 39.1577 40.1341 38.8452 39.8215C38.5326 39.509 38.1087 39.3334 37.6667 39.3334ZM21 41H22.6667C23.1087 41 23.5326 40.8244 23.8452 40.5119C24.1577 40.1993 24.3333 39.7754 24.3333 39.3334C24.3333 38.8913 24.1577 38.4674 23.8452 38.1549C23.5326 37.8423 23.1087 37.6667 22.6667 37.6667H21C20.558 37.6667 20.134 37.8423 19.8215 38.1549C19.5089 38.4674 19.3333 38.8913 19.3333 39.3334C19.3333 39.7754 19.5089 40.1993 19.8215 40.5119C20.134 40.8244 20.558 41 21 41Z"/>
                    </svg>
                    <span className={`${selected === 1? "text-white": "text-black"}  group-hover:text-white`}>Transactions</span>
                </div>
            </div>
            <div className="flex max-w-4xl mt-5 flex-col items-center justify-center">
                {selected == 1 && <Collapse.Group>
                    <Collapse className="text-2xl font-medium"
                              title="What should I do if the payment is not processed?">
                        <span className="font-normal">
                            If there’s any error, you need to contact our support team. Describe your problem and tell us your order number, and we will look into it. If you’ve entered your wallet address incorrectly and have already sent the funds, we will not be able to change anything. So please check the data as carefully as possible before paying for the exchange.
                        </span>
                    </Collapse>
                    <Collapse className="text-2xl font-medium" title="How high are the fees?">
                        <span className="font-normal">
                        The commission for exchanging cryptocurrency is 3%.
                        </span>
                    </Collapse>
                    <Collapse className="text-2xl font-medium" title="Why is my transaction delayed?">
                        <div className="font-normal text-lg">
                            Financial transactions may be delayed and take longer than 30 minutes. This may happen for
                            the following reasons:

                            <div className="ml-4 text-[16px] pt-4">
                                <p className="mt-4">· High load in the blockchain network. If there are many transactions in the queue,
                                    your transaction may take longer to process.
                                </p>
                                <p className="mt-2">· Online updates. Crypocto may disable some cryptocurrencies in order to upgrade the
                                    system. However, after the update, they return, and the client will receive their
                                    money.
                                </p>
                                <p className="mt-2">· DDoS attack. The exchange may be delayed in the event of an attack. However, if this
                                    happens, Crypocto experts will quickly solve the problem and ensure that your funds
                                    are credited.</p>
                            </div>
                        </div>
                    </Collapse>
                </Collapse.Group>}
                {selected == 0 && <Collapse.Group>
                    <Collapse className="text-2xl font-medium"
                              title="What should I do if the payment is not processed?">
                        <span className="font-normal">
                            If there’s any error, you need to contact our support team. Describe your problem and tell us your order number, and we will look into it. If you’ve entered your wallet address incorrectly and have already sent the funds, we will not be able to change anything. So please check the data as carefully as possible before paying for the exchange.
                        </span>
                    </Collapse>

                    <Collapse className="text-2xl font-medium" title="Why is my transaction delayed?">
                        <div className="font-normal text-lg">
                            Financial transactions may be delayed and take longer than 30 minutes. This may happen for
                            the following reasons:

                            <div className="ml-4 text-[16px] pt-4">
                                <p className="mt-4">· High load in the blockchain network. If there are many transactions in the queue,
                                    your transaction may take longer to process.
                                </p>
                                <p className="mt-2">· Online updates. Crypocto may disable some cryptocurrencies in order to upgrade the
                                    system. However, after the update, they return, and the client will receive their
                                    money.
                                </p>
                                <p className="mt-2">· DDoS attack. The exchange may be delayed in the event of an attack. However, if this
                                    happens, Crypocto experts will quickly solve the problem and ensure that your funds
                                    are credited.</p>
                            </div>
                        </div>
                    </Collapse>
                </Collapse.Group>}
            </div>
        </div>
    </>
)
}