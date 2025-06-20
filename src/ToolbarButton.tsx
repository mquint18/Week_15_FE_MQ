//Creates a Toolbar Button Prop


type ToolbarButtonProps = {
    text: string, onClick: () => void
}

export default function ToolbarButton({text, onClick}: ToolbarButtonProps) {
    return(
        <button 
        className="btn btn-outline-primary me-2 btn-lg"
        onClick={onClick}
        >
            <p> {text} </p>  
        </button>
    )
}