# Next.js Project

This is a Next.js project that includes a responsive Sidebar component for navigation. The application is designed to provide a seamless user experience with authentication and various features.

## Features

- Responsive Sidebar for mobile and desktop views.
- Navigation links to different sections of the application.
- User authentication with logout functionality.
- Dynamic highlighting of the active navigation item.
- Built with TypeScript for type safety.

## Technologies Used

- [Next.js](https://nextjs.org/) - The React framework for production.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
- [Lucide](https://lucide.dev/) - Icon library used in the Sidebar component.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
git clone https://github.com/yourusername/your-repo-name.git

2. **Install Dependencies**:

   Make sure you have Node.js installed, then run:
npm install

3. **Run the Development Server**:

   Start the development server with:
npm run dev

   Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

The Sidebar component is included in the layout of the application. It uses the `useAuth` hook for authentication and the `useRouter` and `usePathname` hooks from Next.js for navigation. Ensure that your application is set up to provide these contexts.

### Sidebar Component

The Sidebar component can be found in the `components` directory. You can customize the navigation items by modifying the `navItems` array in the `Sidebar` component.
typescript
const navItems = [
{ name: "Home", href: "/", icon: Home },
{ name: "Notifications", href: "/notifications", icon: Bell },
{ name: "Shop", href: "/shop", icon: ShoppingBag },
{ name: "Conversation", href: "/conversation", icon: MessageSquare },
{ name: "Wallet", href: "/wallet", icon: Wallet },
{ name: "Subscription", href: "/subscription", icon: Ticket },
{ name: "My Profile", href: "/profile", icon: User },
{ name: "Settings", href: "/settings", icon: Settings },
];

## Customization

You can customize various aspects of the project, including:

- **Styling**: Modify the CSS classes in the components to change the appearance.
- **Navigation Items**: Add or remove items in the `navItems` array in the Sidebar component.
- **Authentication Logic**: Update the `useAuth` hook to integrate with your authentication provider.



## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production.
- [Lucide](https://lucide.dev/) - The icon library used in this project.
- [React](https://reactjs.org/) - For building user interfaces.


