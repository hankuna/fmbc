<template>
    <div class="login">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="ruleForm2.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.userName !== '') {
            this.$refs.ruleForm2.validateField('userName');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("用户名不能为空"));
        } else{
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          userName: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          userName: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ]),
      submitForm(formName) {     
        this.getUserInfo()

       //console.log(this.ruleForm2.userName,'===')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.login{
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>


