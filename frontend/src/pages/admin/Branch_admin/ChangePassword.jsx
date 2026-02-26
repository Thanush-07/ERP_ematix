import React from "react";

export default function ChangePassword() {
  return (
    
      <div className="dash-panel-body">
        <form className="change-pass-form" onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: 12 }}>
            <label>Current Password</label>
            <input type="password" name="currentPassword" />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>New Password</label>
            <input type="password" name="newPassword" />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>Confirm New Password</label>
            <input type="password" name="confirmPassword" />
          </div>
          <button className="report-type-btn" type="submit">Update Password</button>
        </form>     
      </div>
  )}
  