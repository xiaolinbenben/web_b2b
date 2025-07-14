export default function Testimonials() {
    // 客户评价数据
    const testimonials = [
        {
            id: 1,
            name: "Jane Anderson",
            location: "Homeowner, San Diego",
            content: "\"The team at Earthly Elegance totally transformed our backyard into a stunning oasis. Their attention to detail and creativity exceeded our expectations!\"",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5
        },
        {
            id: 2,
            name: "James Head",
            location: "Homeowner, New York City",
            content: "\"The team at Earthly Elegance totally transformed our backyard into a stunning oasis. Their attention to detail and creativity exceeded our expectations!\"",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5
        },
        {
            id: 3,
            name: "James Head",
            location: "Homeowner, New York City",
            content: "\"The team at Earthly Elegance totally transformed our backyard into a stunning oasis. Their attention to detail and creativity exceeded our expectations!\"",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5
        },
        {
            id: 4,
            name: "James Head",
            location: "Homeowner, New York City",
            content: "\"The team at Earthly Elegance totally transformed our backyard into a stunning oasis. Their attention to detail and creativity exceeded our expectations!\"",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5
        }
    ];

    // 渲染星星评分
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className="bg-mainColorLight py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 标题区域 */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-mainColorNormal mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-sm font-semibold uppercase tracking-wider text-mainColorNormal">TESTIMONIALS</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Honest Reviews from our<br />Customers
                    </h2>
                </div>

                {/* 评价卡片区域 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-sm relative">
                            {/* 头像和个人信息 */}
                            <div className="flex items-center mb-6">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    className="w-16 h-16 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-gray-600">{testimonial.location}</p>
                                </div>
                            </div>

                            {/* 评价内容 */}
                            <p className="text-gray-700 mb-6 text-base">
                                {testimonial.content}
                            </p>

                            {/* 评分和Google图标 */}
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <div className="text-gray-400">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 12.2266C22.5 11.3359 22.4297 10.4922 22.3125 9.67969H12V13.8984H17.9609C17.7188 15.1875 16.9922 16.2969 15.8672 17.0156V19.6641H19.3359C21.3047 17.8594 22.5 15.2734 22.5 12.2266Z" fill="#4285F4"/>
                                        <path d="M12 23C14.9297 23 17.3672 22.0625 19.3359 19.6641L15.8672 17.0156C14.9297 17.6406 13.6172 18.0234 12 18.0234C9.10938 18.0234 6.69141 16.1094 5.8125 13.5H2.25V16.2344C4.19531 20.2422 7.8125 23 12 23Z" fill="#34A853"/>
                                        <path d="M5.8125 13.5C5.625 12.875 5.50781 12.2031 5.50781 11.5C5.50781 10.7969 5.625 10.125 5.8125 9.5V6.76562H2.25C1.5 8.17188 1.07812 9.77344 1.07812 11.5C1.07812 13.2266 1.5 14.8281 2.25 16.2344L5.8125 13.5Z" fill="#FBBC05"/>
                                        <path d="M12 4.97656C13.5469 4.97656 14.9297 5.53125 16.0078 6.57812L19.1016 3.48438C17.3672 1.85938 14.9297 0.875 12 0.875C7.8125 0.875 4.19531 3.63281 2.25 7.64062L5.8125 10.375C6.69141 7.76562 9.10938 4.97656 12 4.97656Z" fill="#EA4335"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}