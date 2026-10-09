import React from 'react'
import salmonImg from '../assets/Menu-salmon.avif'
import steakImg from '../assets/Menu-steak.jpg'
import pastaImg from '../assets/Menu-pasta.avif'

const Menu = () => {
    const menuItems = [
    { id: 1, name: 'Grilled Steak', description: 'Tender grilled steak served with fresh vegetables and our signature sauce.', img: steakImg, price: '$24.99'},
    { id: 2, name: 'Creamy Pasta', description: 'Rich and creamy pasta tossed with herbs and freshly prepared ingredients.', img: pastaImg, price: '$17.99'},
    { id: 3, name: 'Fresh Salmon', description: 'Perfectly cooked salmon served with seasonal vegetables and lemon.', img: salmonImg, price: '$21.99'}
];
  return (
    <div id="menu">
    <div className="text-center py-12 px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-espresso">Discover Our Menu</h2>
            <p className="mt-3 text-muted max-w-2xl mx-auto">Explore our diverse selection of delicious dishes, carefully crafted to satisfy your taste buds.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 md:px-10 pb-12">
            {menuItems.map(item => (
                <div key={item.id} className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300" >
                <img className="w-full h-56 object-cover" src={item.img} alt={item.name}  />
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-espresso">
                        {item.name}
                    </h3>
                <div className="flex items-center justify-between gap-4">
                    
                     <p className="mt-2 text-muted flex-1">
                        {item.description}
                    </p>

                    <span className="text-lg font-bold text-orange whitespace-nowrap">
                        {item.price}
                    </span>
                </div>  

                   
                </div>
                </div>
            ))}
        </div>
    </div>     
  )
}

export default Menu