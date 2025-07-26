# 🛡️ DRDO Inventory Management System

A full-stack web application designed for managing and tracking inventory items used in DRDO labs. This system helps streamline the operations related to storing, updating, condemning, and retrieving equipment and stock data in a secure and user-friendly interface.

---

## 🚀 Features

- 🔐 **Login System**
  - Admin & User roles with secure authentication.
- 📦 **Inventory Module**
  - View, add, update, and delete items.
  - Auto timestamp for item creation and updates.
- 🚫 **Condemnation Module**
  - Track and mark items as condemned (disposed/unusable).
- 📍 **Location Module**
  - Manage locations where items are stored or used.
- 📄 **PDF & Excel Export**
  - Download filtered data in PDF/Excel formats.
- 🔍 **Search and Filter**
  - Search items based on keywords, date, status, etc.
- 📊 **Dashboard**
  - View stats and summaries of items and categories.

---

## 🛠️ Tech Stack

### 🔧 Backend:
- **Spring Boot** (Java)
- **Hibernate + JPA**
- **MySQL** (Database)
- **RESTful APIs**

### 🎨 Frontend:
- **Angular 17**
- **Bootstrap 5**
- **TypeScript**

---

## 🗃️ Database Structure (Simplified)

| Table | Fields |
|-------|--------|
| `inventory_items` | id, itemName, category, quantity, purchaseDate, status, locationId, condemnedFlag, lastUpdated |
| `locations` | id, locationName, labCode, createdAt |
| `users` | id, username, email, password, role |

---

## 📦 Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Sparsh-Jindal/drdo-inventory.git
cd drdo-inventory
