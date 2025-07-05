import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import '../styles/styles.css';
import '../styles/modern.css';
import '../styles/messages.css'; // Import messages-specific CSS

function Messages() {
    return (
        <>
        <body>
        <Header />

       <section className="messages-section">
        <div className="container">
          <div className="messages-container">

            {/* Messages Sidebar */}
            <div className="messages-sidebar">
              <div className="messages-header">
                <h2>Messages</h2>
                <button className="chat-action-btn" id="new-message-btn">
                  <i className="fas fa-edit"></i>
                </button>
              </div>

              <div className="messages-search">
                <input type="text" placeholder="Search messages..." id="search-messages" />
              </div>

              <ul className="conversation-list" id="conversation-list">
                {/* Conversations will be loaded dynamically */}
              </ul>
            </div>

            {/* Messages Content */}
            <div className="messages-content" id="messages-content">
              {/* Initial state when no conversation is selected */}
              <div className="no-conversation-selected" id="no-conversation">
                <i className="far fa-comments"></i>
                <h3>Your Messages</h3>
                <p>Select a conversation to view messages or start a new one.</p>
                <button className="btn btn-primary" id="start-conversation-btn">
                  <i className="fas fa-edit"></i> New Message
                </button>
              </div>

              {/* Chat interface (hidden initially) */}
              <div
                className="chat-interface"
                id="chat-interface"
                style={{ display: 'none', flexDirection: 'column', height: '100%' }}
              >
                <div className="chat-header">
                  <div className="chat-user">
                    <div className="chat-avatar">
                      <img
                        src=""
                        alt="User"
                        id="chat-user-avatar"
                        onError={(e) =>
                          (e.target.src = 'https://via.placeholder.com/40x40?text=User')
                        }
                      />
                    </div>
                    <div className="chat-user-info">
                      <h3 id="chat-user-name"></h3>
                      <p id="chat-user-status"></p>
                    </div>
                  </div>
                  <div className="chat-actions">
                    <button className="chat-action-btn" title="View Profile">
                      <i className="fas fa-user"></i>
                    </button>
                    <button className="chat-action-btn" title="Delete Conversation">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>

                <div className="chat-messages" id="chat-messages">
                  {/* Messages will be loaded dynamically */}
                </div>

                <div className="message-input">
                  <input type="text" placeholder="Type a message..." id="message-input" />
                  <button id="send-message-btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* New Message Modal */}
      <div className="modal" id="new-message-modal" style={{ display: 'none' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>New Message</h3>
            <button className="close-btn" id="close-modal-btn">
              &times;
            </button>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="recipient">To:</label>
              <select id="recipient" required>
                <option value="">Select a user</option>
                {/* Users will be loaded dynamically */}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" placeholder="Enter a subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" id="cancel-message-btn">
              Cancel
            </button>
            <button className="btn btn-primary" id="send-new-message-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
      
        <Footer />
        </body>
        </>
  );
};

export default Messages;