import React from 'react';

const POS = () => (
    <section id="pos" className="pos-section">
        <div className="pos-container">
            <h2 className="pos-heading">Point of Sale</h2>
            <p className="pos-subtitle">Complete transaction management at your fingertips</p>
            
            {/* Printer Slot Container */}
            <div className="printer-slot">
                <div className="receipt-content">
                    <div className="receipt-header">
                        <div className="receipt-line">================================</div>
                        <div className="receipt-line">FIXLYTIQ</div>
                        <div className="receipt-line">Point of Sale System</div>
                        <div className="receipt-line">================================</div>
                        <div className="receipt-line">Date: {new Date().toLocaleDateString()}</div>
                        <div className="receipt-line">Time: {new Date().toLocaleTimeString()}</div>
                        <div className="receipt-line">--------------------------------</div>
                    </div>
                    
                    <div className="receipt-content">
                        <div className="receipt-line">FEATURES INCLUDED:</div>
                        <div className="receipt-line">--------------------------------</div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Real-time Inventory Tracking</div>
                            <div className="receipt-line">  Track parts & supplies instantly</div>
                        </div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Customer Management</div>
                            <div className="receipt-line">  Complete customer profiles & history</div>
                        </div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Payment Processing</div>
                            <div className="receipt-line">  Accept cards, cash, digital payments</div>
                        </div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Invoice Generation</div>
                            <div className="receipt-line">  Professional invoices & receipts</div>
                        </div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Tax Calculations</div>
                            <div className="receipt-line">  Automatic tax & discount handling</div>
                        </div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Reporting & Analytics</div>
                            <div className="receipt-line">  Sales reports & performance metrics</div>
                        </div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Offline Mode</div>
                            <div className="receipt-line">  Works without internet connection</div>
                        </div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Multi-location Support</div>
                            <div className="receipt-line">  Manage multiple service locations</div>
                        </div>
                        
                        <div className="receipt-item">
                            <div className="receipt-line">✓ Integration Ready</div>
                            <div className="receipt-line">  Connect with accounting software</div>
                        </div>
                        
                        <div className="receipt-line">--------------------------------</div>
                        <div className="receipt-line">TOTAL FEATURES: 9</div>
                        <div className="receipt-line">--------------------------------</div>
                        <div className="receipt-line">Thank you for choosing Fixlytiq!</div>
                        <div className="receipt-line">================================</div>
                        <div className="receipt-line">Powered by Fixlytiq Field Service</div>
                        <div className="receipt-line">www.fixlytiq.com</div>
                        <div className="receipt-line">================================</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default POS;
