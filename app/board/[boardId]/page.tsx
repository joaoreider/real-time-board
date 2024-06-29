import { Room } from "@/components/Room";
import Canvas from "./_components/Canvas";
import CanvasLoading from "./_components/CanvasLoading";


interface BoardIdPageProps {
    params: {
        boardId: string
    }
}

export default function BoardIdPage({ params}: BoardIdPageProps) {
    return (
        <Room roomId={params.boardId} fallback={<CanvasLoading />}>
            <Canvas boardId={params.boardId} />
        </Room>

    )
}