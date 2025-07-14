# Exhibition Event Navigator

![Exhibition Event Navigator Banner](https://via.placeholder.com/800x200.png?text=Exhibition+Event+Navigator)\
*Empowering seamless exploration of exhibitions and events with cutting-edge navigation and personalization.*

Welcome to the **Exhibition Event Navigator**, a powerful, cross-platform mobile and web application built with **React Native** and **Expo** to revolutionize how users experience exhibitions, trade shows, and events. Whether you're navigating sprawling convention centers or personalizing your event journey, our app delivers an intuitive, responsive, and feature-rich experience across iOS, Android, and web platforms. This project, developed in Firebase Studio (Project IDX), leverages modern technologies to create a scalable and engaging platform, with exciting plans for Supabase integration, 3D map navigation, and AI-driven design customization.

---

## 🌟 Features

### Current Capabilities

- **Cross-Platform Navigation**: Seamlessly runs on iOS, Android, and web, powered by **React Native** and **Expo**, ensuring a consistent experience across devices.
- **Event Navigation Core**: Designed as the "Exhibition Event Navigator," the app helps users explore exhibitions with event listings, schedules, and venue details, currently powered by mock data for rapid prototyping.
- **Dynamic Routing**: Utilizes **Expo Router** with type-safe routing for smooth navigation within the app, enhancing developer productivity and user experience.
- **Custom Splash Screen & Icons**: Features a branded splash screen and adaptive/standard icons for iOS and Android, creating a polished first impression.
- **EAS Build Integration**: Configured with **Expo Application Services (EAS)** for streamlined builds, supporting development, preview, and production profiles with automatic version incrementing for production APKs.
- **Responsive Design**: Built with Expo’s responsive design capabilities, ensuring compatibility with diverse device sizes and orientations.
- **AI-Driven Design Elements**: Early integration of AI-generated design assets (e.g., showroom card layouts), setting the stage for visually stunning user interfaces.

### Planned Enhancements

- **Supabase Integration**: Transition from mock data to **Supabase** for robust backend management, capable of handling over 200,000 users with optimized real-time database and authentication.
- **3D Map Navigation**: Replace current 2D maps (which have errors) with interactive 3D map models for precise indoor navigation in exhibition venues, inspired by solutions like Navigine’s Indoor Navigation SDK.
- **Custom Showroom Card Design**: Empower users to personalize showroom card designs with drag-and-drop editors and AI-assisted styling, enhancing engagement.
- **Interactive Games**: Introduce gamified features (e.g., scavenger hunts, quizzes) to make exhibitions more engaging, integrated with event data.
- **Offline Access**: Enable offline event schedules and maps for uninterrupted use in low-connectivity environments.
- **Push Notifications**: Implement real-time alerts for event updates, reminders, and personalized recommendations.
- **Multilingual Support & Accessibility**: Offer multi-language options and accessibility features (e.g., screen reader support) to ensure inclusivity.
- **Ticketing Integration**: Connect with external ticketing platforms for seamless registration and entry management.

---

## 🚀 Technical Stack

- **Core Framework**: React Native for cross-platform development with a single codebase.
- **Development Environment**: Firebase Studio (Project IDX) with Nix for dependency management, providing a cloud-based IDE for rapid development.
- **Navigation**: Expo Router with typed routes for type-safe, file-system-based navigation.
- **Build & Deployment**: Expo Application Services (EAS) for building, signing, and distributing apps across platforms.
- **Dependency Management**: Managed via `npm`, with `package.json` and `package-lock.json` ensuring consistent installations.
- **Version Control**: Git, hosted on GitHub, with contributions managed via branches and pull requests.
- **Planned Backend**: Supabase for scalable, real-time database and authentication services.
- **AI Integration**: Leveraging AI tools (e.g., Gemini for design inspiration) to enhance UI/UX and content creation.

---

## 🛠 Getting Started

### Prerequisites

- **Node.js** and **npm** (or **yarn**) installed.
- **Expo CLI**: Install globally with `npm install -g expo-cli`.
- **Git**: For cloning and version control.
- A GitHub account with write access to `sliitsesc/exhibition-navigation-app`.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/sliitsesc/exhibition-navigation-app.git
   cd exhibition-navigation-app
   ```

2. **Switch to the** `ADBO` **Branch**:

   ```bash
   git checkout ADBO
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Run the App**:

   ```bash
   npx expo start
   ```

   - Scan the QR code with Expo Go on iOS/Android or open `http://localhost:8082` for web.
   - Press `a` for Android, `w` for web, or `i` for iOS simulator.

### Build Instructions

- **Development Build** (for testing):

  ```bash
  npx eas build --profile development --platform all
  ```

- **Preview Build** (for internal distribution):

  ```bash
  npx eas build --profile preview --platform all
  ```

- **Production Build** (APK for Android):

  ```bash
  npx eas build --profile production --platform android
  ```

---

## 📈 Roadmap

1. **Supabase Integration**: Replace mock data with Supabase for real-time event data, user authentication, and scalability for 200,000+ users.
2. **3D Map Implementation**: Integrate a 3D map model (e.g., via Mapbox or Navigine SDK) to fix current map errors and enhance indoor navigation.
3. **Custom Showroom Cards**: Develop a drag-and-drop editor for users to design personalized showroom cards, with AI-generated templates.
4. **Gamification**: Add interactive games (e.g., event-based scavenger hunts) to boost engagement.
5. **Push Notifications & Offline Mode**: Enable real-time alerts and offline access for seamless user experiences.
6. **Multilingual & Accessibility**: Implement multi-language support and accessibility features for broader reach.
7. **CI/CD Pipeline**: Set up GitHub Actions for automated testing and deployment.

---

## 💡 Why This App?

The **Exhibition Event Navigator** is more than an app—it’s a vision to transform how users engage with exhibitions. By combining **React Native**’s cross-platform power, **Expo**’s rapid development tools, and future **Supabase** scalability, we’re building a platform that’s:

- **Scalable**: Ready to handle massive event crowds with Supabase’s optimized backend.
- **Engaging**: Gamified features and personalized designs keep users immersed.
- **Innovative**: 3D maps and AI-driven UI set us apart from traditional navigation apps.
- **Accessible**: Cross-platform and offline support ensure inclusivity.

To the **Ayiyalas**: This is our bold step toward redefining event navigation. Your feedback and contributions will shape this app into a game-changer for exhibitions worldwide!

---

## 🤝 Contributing

We welcome contributions from the Ayiyalas and the community! To contribute:

1. Fork the repository and clone it:

   ```bash
   git clone https://github.com/your-username/exhibition-navigation-app.git
   ```

2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git add .
   git commit -m "Add your feature"
   ```

4. Push and create a pull request:

   ```bash
   git push origin feature/your-feature
   ```

   Open a pull request against the `ADBO` branch.

---

## 📋 License

This project is licensed under the MIT License.

---

## 📬 Contact

For questions or feedback, reach out to the team via GitHub Issues or contact the project maintainers

---

*Built with passion by the SLIIT SESC team. Let’s navigate the future of exhibitions together!*
