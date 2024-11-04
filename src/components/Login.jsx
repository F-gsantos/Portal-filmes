export default function Login({ isLogged, handleLogin }) {


    return (
        <div className="flex gap-4 items-center">
            {isLogged && <p>Olá, usuário</p>}
            <button
                onClick={handleLogin}
                className={`${isLogged ? "bg-red-700" : " border-b-zinc-950"} bg-red-700 px-4 py-1 rounded`}>
                {isLogged ? "Logout" : "Login"}
            </button>
        </div>
    )
}