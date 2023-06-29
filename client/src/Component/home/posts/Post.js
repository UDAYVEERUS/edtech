import React from 'react'

const Post = () => {
    return (
        <div class="post-card items-center border-b-2 py-10 lg:flex lg:w-full">
            <div class="post-image lg:mr-10">
                <img
                    src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g9.jpg"
                    alt=""
                />
            </div>
            <div class="post-desc text-base">
                <div class="text-lg font-semibold">Lorem, ipsum dolor.</div>
                <div class="mb-3 text-xl text-gray-700">April 25, 2020</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium, in!
                </p>
            </div>
        </div>
    )
}

export default Post