export default function TabButton({children,onSelected,...probs}){
    return (
        <li><button className={onSelected ?'active':undefined} {...probs}>{children}</button></li>
    );
}