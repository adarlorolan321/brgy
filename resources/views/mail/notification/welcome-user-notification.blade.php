<tr style="background-color: #FF6A00;text-align: center;color: #333333;">
<td style="font-size: 35px;font-weight:700;padding: 30px 0px 20px;text-align: center"><div style="text-align: center">
        Hi {{ $user['first_name'] }},
    </div></td>
</tr>
<tr style="background-color: #FF6A00; text-align: center; height: 70px;">
<td style="font-size: 25px;color: #fff;font-weight:500;padding: 0px 0 40px 0;"> <div style="text-align: center">
        Welcome to Sport SAAS
    </div>
</td>
</tr>
<tr style="background-color: #fff;">
<td style="text-align: center; font-size: 16px; padding-top: 50px;">
<div style="width: 539px; margin: auto; text-align: center;">
Your login details are below, use these to log in and access your account: <br><br>
<span style="font-weight:500;"> Username:</span> {{ $user['email'] }} <br><br>
<span style="font-weight:500;"> Password:</span> {{ $user['password'] }}
</div>
</td>
</tr>
<tr>
</tr>

