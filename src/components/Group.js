import React from 'react';
const renderIcon = (status) => {
  switch (status) {
    case 'In progress':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#000" strokeWidth="2" fill="none" />
          <path d="M12 2 A10 10 0 0 1 22 12" fill="#0000FF" />
        </svg>
      );
    case 'Completed':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#0000FF" />
          <path d="M8 12.5l2 2 4-4" stroke="#FFF" strokeWidth="2" fill="none" />
        </svg>
      );
    case 'Backlog':
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#95999F" strokeWidth="2" strokeDasharray="1.4 1.74"/>
        </svg>  
      ); 
    case 'Todo':
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#B8B8B8" strokeWidth="2"/>
        </svg>
      );
    default:
      return null; // Return null if status does not match
  }
};

const KanbanGroup = ({ groupTitle, tickets, grouping }) => {
  console.log(`Grouping: ${grouping}`); // Check if grouping is correct

  return (
    <div className="kanban-group">
      <div className="ticket-container">
        {tickets.map((ticket) => {
          return (
            <div key={ticket.id} className="ticket-card">
              {ticket.id}
              {grouping === 'user' && (
                <div className="ticket-icon">
                  {renderIcon(ticket.status)}
                </div>
              )}
              <div className="ticket-content">
                <h4>
                  {grouping === 'user' && (
                    <span className="ticket-status-icon">
                      {renderIcon(ticket.status)}
                    </span>
                  )}
                  {ticket.title}
                </h4>
                <p>{ticket.description}</p>
                <p>Priority: {['No Priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanGroup;
