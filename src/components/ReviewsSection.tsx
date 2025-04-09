import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReviewsSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Andrei Popescu",
            comment: "Foarte mulțumit de serviciile oferite! Mașina mea arată ca nouă după detailing, iar echipa a fost extrem de profesionistă. Recomand cu încredere!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            id: 2,
            name: "Cornel Dima",
            comment: "Am dus mașina pentru polish și protecție ceramică, iar rezultatul a fost peste așteptări. Luciu impecabil, iar echipa foarte atentă la detalii!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/81.jpg"
        },
        {
            id: 3,
            name: "Gabriel Asproiu",
            comment: "Servicii de top! Am făcut remapare și acum mașina trage mult mai bine. Se simte diferența clar, iar consumul chiar a scăzut puțin. Recomand 100%!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
            id: 4,
            name: "Toma Filip",
            comment: "Foarte atenți și pricepuți! Am făcut detailing interior și mi-au scos toate petele de pe scaune. Mașina miroase și arată ca nouă!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 5,
            name: "Paul Nica",
            comment: "Super experiență! Am apelat la ei pentru colantare și sunt foarte încântată de rezultat. Culorile sunt vii, iar aplicarea e perfectă, fără bule sau imperfecțiuni.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/28.jpg"
        },
        {
            id: 6,
            name: "Cirstea Catalin",
            comment: "Am făcut o revizie completă și am schimbat evacuarea la ei. Sunetul e absolut genial acum! Super profesioniști și prețuri bune. Recomand!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/43.jpg"
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-20 bg-gray-800/30 backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    style={{
                        background: 'linear-gradient(to right, #A7CFDF 0%, #23538A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Client Reviews
                </motion.h2>

                {/* Custom Navigation Arrows (hidden on mobile) */}
                <div className="hidden lg:block">
                    <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-blue-500/30 cursor-pointer transition-colors">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-blue-500/30 cursor-pointer transition-colors">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                        disabledClass: 'opacity-30 cursor-default pointer-events-none'
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            navigation: false
                        },
                        1024: {
                            slidesPerView: 3,
                            navigation: {
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }
                        }
                    }}
                    className="pb-12"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 h-full"
                                style={{
                                    minHeight: '300px',
                                    maxHeight: '300px',
                                    width: '100%',
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-300 italic mb-6">"{review.comment}"</p>
                                <div className="mt-auto">
                                    <h4 className="text-white font-semibold">{review.name}</h4>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
};

export default ReviewsSection;