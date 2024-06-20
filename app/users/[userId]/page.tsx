
interface UserIdPageProps {
    params: {
        userId: string;
    }
}

export default function UserIdPage({ params }: UserIdPageProps) {
    return (
        <div>UserId: {params.userId}</div>
    );
}