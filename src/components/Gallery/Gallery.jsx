export default function Gallery({ list }) {
    return <div>
        {list.map((item, index) => <div key={index}>
            <h2>{item.character}</h2>
            <img src={item.image} alt={item.character} />
            <p>{item.quote}</p>
        </div>)}
    </div>
}