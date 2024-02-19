<template>
  <div>
    <header class="main-header">
      <div class="top-left">
        <i class="bx bx-menu" id="menu-icon"></i>

        <a href="index.html" class="logo-link">
          <img src="../images/primelog.png" alt="" class="logo" />
        </a>
      </div>
      <div class="top-right">
        <a href="profile.html">Profile</a>
        <a href="" id="logout">Logout</a>
        <a href="../users/auth/login.html">Login</a>
        <a href="../users/auth/register.html" id="register">Register</a>
        <a href="#"><i class="bx bxs-sun"></i></a>
        <a href="#"><i class="bx bxs-moon"></i></a>
      </div>
    </header>

    <div class="sidenav">
      <a href="admin.html"><i class="bx bxs-dashboard"></i> Dashbord</a>

      <button class="dropdown-btn">
        <i class="bx bx-football"></i> Games
        <i class="bx bx-caret-down"></i>
      </button>
      <div class="dropdown-container">
        <a href="matches.html">Matches</a>
        <a href="viewmatches.html">Results</a>
      </div>

      <div>
        <button class="dropdown-btn">
          <i class="bx bxs-user"></i> Manage Users
          <i class="bx bx-caret-down"></i>
        </button>
        <div class="dropdown-container" id="statusFilter">
          <a href="activeUser.html">Active User</a>
          <a href="bannedUser.html">Banned User</a>
          <a href="unverifiedUsers.html">Unverified Users</a>
          <a href="allUsers.html">All Users</a>
          <a href="#">Notification</a>
        </div>
      </div>
      <a href="widthdrawals.html"><i class="bx bx-money-withdraw"></i> Withdrawals</a>
      <a href="deposits.html"><i class="bx bxs-bank"></i> Deposits</a>
      <a href="#contact">Search</a>
    </div>
    <main class="main-content">
      <div class="contain">
        <div class="container bootstrap snippet">
          <div class="row">
            <div class="col-lg-2 col-sm-6">
              <div class="circle-tile">
                <a href="#">
                  <div class="circle-tile-heading dark-blue">
                    <i class="fa fa-users fa-fw fa-3x"></i>
                  </div>
                </a>
                <div class="circle-tile-content dark-blue">
                  <div class="circle-tile-description text-faded">Users</div>
                  <div class="circle-tile-number text-faded">265</div>
                  <a class="circle-tile-footer" href="#"
                    >More Info<i class="fa fa-chevron-circle-right"></i
                  ></a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-sm-6">
              <div class="circle-tile">
                <a href="#">
                  <div class="circle-tile-heading red"><i class="fa fa-users fa-fw fa-3x"></i></div>
                </a>
                <div class="circle-tile-content red">
                  <div class="circle-tile-description text-faded">Users Online</div>
                  <div class="circle-tile-number text-faded">10</div>
                  <a class="circle-tile-footer" href="#"
                    >More Info<i class="fa fa-chevron-circle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
