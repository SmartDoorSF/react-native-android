# react-native-android

## Setup

For Mac users,

### Install the Android SDK

```bash
brew install android-sdk
```

### Define the ANDROID\_HOME env var

Add below line to your ~/.zshrc or ~/.bashrc

```bash
# If you installed the SDK via Homebrew, otherwise ~/Library/Android/sdk
export ANDROID_HOME=/usr/local/opt/android-sdk
```

Then

```bash
source ~/.zshrc
```

### Install Gradle

```bash
brew install gradle
```

#### Enable Gradle

```bash
touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
```

### Configure your SDK

open Android SDK Manager on Mac

```bash
android
```
