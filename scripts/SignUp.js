function UpdateProfile()
{
    return `<div id="edit">
    <form action="">
        <h1 class="hello"></h1>
        <p>First Name :</p>
        <input type="text" name="" id="First_Name" placeholder=" First Name">
        <p>Last Name :</p>
        <input type="text" name="" id="Last_Name" placeholder=" Last Name">
        <p>Email :</p>
        <input type="email" name="" id="email" placeholder=" Email">
        <p>Contact Number :</p>
        <input type="number" name="" id="number" placeholder=" number">
        <p>Birthday :</p>
        <input type="date" name="" id="date" placeholder=" ">
        <p>Gender :</p>
        <select name="" id="gender">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>
        <button id="cancelbtn">Cancel</button>
        <button id="savebtn" type="submit" >Save</button>
    </form>
</div>`;
}
function UpdatePassword()
{
    return `<div id="update">
    <form action="">
        <h1 id="hello"></h1>
        <p>New Password :</p>
        <input type="password" name="" id="NP" placeholder="Enter New Password ">
        <p>Confirm New Password :</p>
        <input type="password" name="" id="CNP" placeholder=" Enter Confirm New Password">
        <button id="SPB">Save</button>
    </form>
</div>`;
};
export {UpdateProfile,UpdatePassword};
