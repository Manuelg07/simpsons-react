export default function Search({onSearch}) {
    return <div>
       <input type="text" onChange={(e) => onSearch(e.target.value)} />
    </div>
}