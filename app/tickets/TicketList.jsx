import Link from "next/link";
import { tickets } from "@/data/tickets";

// async function getTickets() {
//     await new Promise(resolve => setTimeout(resolve, 3000));

//     const res = await fetch('http://localhost:4000/tickets', {
//         next: {
//             revalidate: 30
//             // revalidate: 0 // use 0 to opt out of using cache
//         }
//     });

//     return res.json();
// }

export default async function TicketList() {
    // const tickets = await getTickets();

    return (
        <>
            {tickets.map((ticket) => (
                <Link key={ticket.id} href={`tickets/${ticket.id}`}>
                    <div key={ticket.id} className="card">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)} ...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </div>
                </Link>  
            ))}

            {tickets.length === 0 && (
                <p className="text-center">There are no tictkets open</p>
            )}
        </>
    )
}