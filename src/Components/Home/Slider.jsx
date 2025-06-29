
"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home/Hero.module.css";
import Image from 'next/image'
const images = [
    "https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/08/pixel-9_t_peony-1.png",
    "https://media.extra.com/s/aurora/100004139_800/Sony-XB510AS-Extra-Bass-Sports-Inear-Headphones-Red?locale=en-GB,en-*,*",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyYBQ93HHquphQRFhblGkTawvQkq_Vh7VxYml88KMoHGaQBPab5XZc6gizXZTHG-1VCp4GVvtUxxDDesr51pQgcaxNlUQCdm8KfJoyzhj6qkMK56uJQevVtGE2k1syt-RdhxXRB2Rg7k4-RhEt-89yWfIR3LPkBMq9amR4d_-AlOXiwOQJG66DMjs6K5q2/w492-h640/1000x_smokey_pink_2.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnAkB25j-t4PxjBpcHc4MH7FbwBAqOe2KvCpeKAdfZeypLHmzeKbUVuBI9kkvdX2r5ldfNGPOTYp1M58IJ50NCIrPExm-zOm57steSh53t7TIkRx6irQXrOcOdVbydxrQ3TLvEnh-qsSDe/s1600/sony1_o.jpg",
    "https://cdn.shopify.com/s/files/1/0556/8587/3825/products/PRACXX00423_headphones_Nocables_Noshadow_2000-removebg-preview-min_bfac7574-c3f0-496b-a58c-4b7060e106ac_1280x.png?v=1694448384",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitdsHLqMl-7a5fisxcY2EVszkRE5Q0YVGG-uGeYwtWpGWDpu3eMqFMcRKOQi2E7yF_87DpIcucbYgz42Q7FEoUrMmZLxi9tACUoDWapsQimzZzkBIYEfBhqE_cUZhsPbi9BozeNAIBKYpV/s640/whh910n_2.jpg"
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.imageSection}>
            <div className={styles.slider}>
                {images.map((key, index) => (
                    <Image
                        key={index}
                        alt={`Slider ${index + 1}`}
                        className={`${styles.slide}
     ${index === currentSlide ? styles.active : ""}`}
                        src={key}
                        fill
                    />
                ))}


            </div>
        </div>
    );
}