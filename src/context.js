import React, {useState, useEffect} from 'react'

const Context= React.createContext();

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"


useEffect(() => {
    const randomNums = []
    while(randomNums.length < 5) {
        const newRandomInt = (Math.random() * 10) + 1;
        if(randomNums.indexOf(newRandomInt) === -1) randomNums.push(newRandomInt)
    }
    const finalNum = randomNums.find(num => (num < 399))

    fetch(url)
    .then(res => res.json())
    .then(data => {     
        const dataWithPrice = data.map(item => { return {...item, price: parseFloat(finalNum)}})
        setAllPhotos(dataWithPrice)
    })
}, [])

function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
        if(photo.id === id) {

            return {...photo, isFavorite: !photo.isFavorite}
        }
        return photo
    })
    setAllPhotos(updatedArr)
}

function addToCart(newItem) {
setCartItems(prevItems => [...prevItems, newItem])
}

function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

function emptyCart() {
    setCartItems([])
    }

 
return(<Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>{children}</Context.Provider>)
}

export { Context, ContextProvider }
