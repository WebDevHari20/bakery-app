const catalogueItems = [
  { id: 1, name: 'Vanilla Cake', category: 'Classic', price1kg: '700', price500g: '375', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=500' },
  { id: 2, name: 'Pineapple Cake', category: 'Tropical', price1kg: '650', price500g: '350', image: 'https://images.unsplash.com/photo-1464305795204-6f5bbee7bb81?auto=format&fit=crop&w=500' },
  { id: 3, name: 'Strawberry Cake', category: 'Berry', price1kg: '650', price500g: '350', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500' },
  { id: 4, name: 'Butterscotch Cake', category: 'Gourmet', price1kg: '700', price500g: '375', image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=500' },
  { id: 5, name: 'Orange Cake', category: 'Zesty', price1kg: '700', price500g: '375', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=500' },
  { id: 6, name: 'Mango Cake', category: 'Seasonal', price1kg: '700', price500g: '375', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb844?auto=format&fit=crop&w=500' },
  { id: 7, name: 'Fully Chocolate Cake', category: 'Indulgent', price1kg: '900', price500g: '475', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500' },
  { id: 8, name: 'Chocolate Truffle Cake', category: 'Signature', price1kg: '850', price500g: '450', image: 'https://images.unsplash.com/photo-1606313564059-4447b842797b?auto=format&fit=crop&w=500' },
  { id: 9, name: 'Chocolate Mouse Cake', category: 'Velvet', price1kg: '800', price500g: '425', image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=500' },
  { id: 10, name: 'Dark Forest Cake', category: 'Classic', price1kg: '800', price500g: '425', image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=500' },
  { id: 11, name: 'White Forest Cake', category: 'Classic', price1kg: '800', price500g: '425', image: 'https://images.unsplash.com/photo-1534304290353-227a9071ad40?auto=format&fit=crop&w=500' },
  { id: 12, name: 'Chocolate Caramel', category: 'Gourmet', price1kg: '850', price500g: '450', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=500' },
  { id: 13, name: 'Oreo Chocolate Cake', category: 'Crunchy', price1kg: '850', price500g: '450', image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=500' },
  { id: 14, name: 'Kitkat Cake', category: 'Crunchy', price1kg: '850', price500g: '450', image: 'https://images.unsplash.com/photo-1551404973-7063863a3465?auto=format&fit=crop&w=500' },
  { id: 15, name: 'Chocolate Strawberry', category: 'Gourmet', price1kg: '900', price500g: '475', image: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=500' },
  { id: 16, name: 'Fresh Fruit Cake', category: 'Healthy', price1kg: '900', price500g: '475', image: 'https://images.unsplash.com/photo-1504473394234-1847a8a5e988?auto=format&fit=crop&w=500' },
  { id: 17, name: 'Dry Fruit Cake', category: 'Premium', price1kg: '1000', price500g: '525', image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&w=500' },
  { id: 18, name: 'Plum Cake', category: 'Traditional', price1kg: '900', price500g: '475', image: 'https://images.unsplash.com/photo-1519340333755-5662a6aa25b4?auto=format&fit=crop&w=500' },
  { id: 19, name: 'Chocolate Cup Cake', category: 'Cupcakes', price1kg: '40', price500g: null, image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=500' },
  { id: 20, name: 'Normal Cup Cake', category: 'Cupcakes', price1kg: '35', price500g: null, image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=500' },
]

export default catalogueItems