import './App.css';
import UserProfile from './components/UsersProfile';

const userDetailsList = [
  {
    id:0,
    imgURL: 'https://cdn.dribbble.com/users/4272069/screenshots/11012844/media/4e17fd653d4a88eae242540590be9fd5.png',
    name: 'Mosh',
    role: 'Senior Engineer'
  },
  {
    id:2,
    imgURL: 'https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg',
    name: 'Rohith',
    role: 'Architech'
  },
  {
    id:1,
    imgURL: 'https://cdn.dribbble.com/users/2638821/screenshots/9213234/media/d51ac680af06d6c9642b145ebe24633f.jpg',
    name: 'Max William',
    role: 'Engineer'
  },
  {
    id:3,
    imgURL: 'https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg',
    name: 'Leonard',
    role: 'Business Analyst'
  }
]

const App = () =>  (
    <div className='list-container'>
      <h1 className='list-header'>Users List</h1>
      <ul>
        {userDetailsList.map(user => < UserProfile userDetails = { user } key={user.id}/>)}
      </ul>
    </div>
)

export default App;
