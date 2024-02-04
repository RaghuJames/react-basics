export default function TabButton({children, onSelect,onSelected}){
    return (
        <li><button className={onSelected ?'active':undefined} onClick={onSelect}>{children}</button></li>
    );
}