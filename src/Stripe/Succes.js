
import { useNavigate } from "react-router";

function SucessPage() {
    const navigate = useNavigate();
    const navigateToRezervacija = () => {
        navigate("/sverezervacije");
    };
return(
    
    <div>
        Čestitamo, uspešno ste izvršili plaćanje rezervacije. 
        <button onClick={navigateToRezervacija}>Vrati me nazad na rezervacije!</button>
    </div>
)
}
export default SucessPage;

