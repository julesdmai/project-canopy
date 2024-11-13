function HomePage() {
    return (
        <div>
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <img src="path/to/logo.png" alt="Logo"/>
                </div>
                <nav className="nav-links">
                    <a href="/products" className="nav-link">Products</a>
                    <a href="/about" className="nav-link">About</a>
                    <a href="/devlog" className="nav-link">DevLog</a>
                </nav>
            </header>

            {/* Main Content (Body) */}
            <main className="main">
                <p>This is the Home page.</p>
            </main>

            {/* Footer */}
            <footer className="footer">
                <button className="bg-button">Change Background</button>
                <a href="https://linkedin.com/in/yourprofile" className="linkedin-link" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </footer>
        </div>
    )
}

export default HomePage;