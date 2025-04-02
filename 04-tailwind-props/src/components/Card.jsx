import React from 'react'

function Card({username, price=10.00}){                                                          //props to reuse components with diff
    return(
        <div className="w-[300px] h-[400px] flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col z-0 h-full w-full">
          <div className="flex justify-between ">
            <h1 className="font-bold  text-4xl p-4" >{username}</h1>
            <h1 className="text-3xl p-4">Price</h1>
          </div>
          <div className="flex  justify-between  p-2">
            <p>#345</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
        
    )
}

export default Card