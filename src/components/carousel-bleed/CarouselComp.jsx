const CarouselComp = () => {
    return (
        <>
            <div className="pb-5">
                <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                    <div className="carousel-item">
                        <div className="relative rounded-box overflow-hidden">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 opacity-100">
                                <div className="flex flex-col-reverse h-full">
                                    <p className="text-sm px-2 py-2">10 Dec, 2023</p>
                                    <p className="text-2xl px-2 font-bold">Marvel Spiderman</p>
                                </div>
                            </div>

                            {/* Gambar */}
                            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="rounded-box" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselComp;
