import { notFound } from "next/navigation";
import { tickets } from "@/data/tickets";

export const dynamicParams = true;

// export async function getStaticParams() {
//     const res = await fetch('http://localhost:4000/tickets/');

//     const tickets = await res.json();

//     return tickets.map((ticket) => ({
//         id: ticket.id
//     }))
// }

function getTicket(id) {
    // const res = await fetch('http://localhost:4000/tickets/' + id);
    const ticket = tickets.filter(ticket => ticket.id === id);

    console.log(ticket);

    // if (!res.ok) {
    //     notFound();
    // }

    // return res.json();
    return ticket;
}

export default async function TicketDetails({ params }) {
    const ticket = getTicket(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket details</h2>
            </nav>

            {ticket.map(ticket => (
                <div key={ticket.id} className="card"> 
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body}</p>
                    <p>Created by {ticket.user_email}</p>
                    <div className={`pill ${ticket.priority}`}>
                        Priority {ticket.priority}
                    </div>
                </div>
            ))}
        </main>
    )
}