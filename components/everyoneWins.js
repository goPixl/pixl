import React from 'react'
import {AiOutlineStar} from 'react-icons/ai';

export default function EveryoneWins() {
   return (
      <section className="p-5 md:p-10 w-full max-w-7xl m-auto">
         <h4 className="text-2xl font-bold text-black text-center dark:text-white mb-4 md:mb-0">With Pixl, Everyone Wins</h4>
         <div className="everyone_row_ll flex w-[100%] my-10 justify-between items-center">
            <div className="cardFt everyone_card_ll">
               <div className='everyone_card_inner_ll'>
               <div className='everyone_icon_container'>
               <AiOutlineStar
               size={25}
               />
               </div>
               
               <h5 className="text-xl font-bold mb-2">Web3</h5>
               <ul className="list-disc pl-6">
                  <li>New way to interact & earn daily with web3</li>
                  <li>Increased adoption & awareness by tapping new demographics</li>
                  <li>Earn free web3 rewards for shopping at retailers they already shop at</li>
               </ul>
               </div>
               
            </div>
            <div className="cardFt everyone_card_1_ll">
               <div className='everyone_card_inner_1_ll'>
               <div className='everyone_icon_container_1'>
               <AiOutlineStar
               size={25}
               />
               </div>
               <h5 className="text-xl font-bold mb-2">Retailers</h5>
               <ul className="list-disc pl-6">
                  <li>More loyal & engaged online community</li>
                  <li>Further brand awareness & reach through global web3 participants</li>
                  <li>Directly connect with high-value transacting power-users risk-free</li>
               </ul>
            </div>
               </div>
           
            <div className="cardFt everyone_card_2_ll">
            <div className='everyone_card_inner_2_ll'>
               <div className='everyone_icon_container_2'>
               <AiOutlineStar
               size={25}
               />
               </div>
               <h5 className="text-xl font-bold mb-2">Solana</h5>
               <ul className="list-disc pl-6">
                  <li>Broadens product offerings & appeals to a wider audience outside of web3</li>
                  <li>Showcases Solana’s performance & user experience to web2 in a unique way</li>
                  <li>Leverage platform incentives to drive retailer adoption of other Solana Ecosystem products i.e Solana Pay</li>
               </ul>
               </div>
            </div>
            <div className="cardFt everyone_card_3_ll">
               <div className='everyone_card_inner_3_ll'>
               <div className='everyone_icon_container_3'>
               <AiOutlineStar
               size={25}
               />
               </div>
               <h5 className="text-xl font-bold mb-2">Web2</h5>
               <ul className="list-disc pl-6">
                  <li>Opportunity to interact with web3 without capital investment</li>
                  <li>Expands the range of rewards available to current cash back rewards customers</li>
                  <li>Compound rewards as web3 rewards have potential to appreciate in value</li>
               </ul>
               </div>
            </div>
         </div>
      </section>
   )
}