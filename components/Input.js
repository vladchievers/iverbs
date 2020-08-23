// import Search from '../assets/svg/search.svg';
const Input = ({ handleInput }) => {
    return (
        <div className='inputWrapper'>
            {/* <Search /> */}
            <input type="search" placeholder="Enter the verb that you need" onChange={handleInput}/>
        </div>
    )
};

export default Input;
