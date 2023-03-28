import ideaSVG from "../../assets/idea.svg"

const Header = () => {
return(
    <div className="flex flex-col p-10">
        <img src={ideaSVG}  className="h-52 mt-5"/>
        <p className="text-white text-4xl text-center mt-5 font-medium">Looking for a new project idea?</p>
        <p className="text-white text-xl text-center mt-5 italic hover:not-italic">Instantly generate different ideas with AI power</p>
    </div>
)
}

export default Header;