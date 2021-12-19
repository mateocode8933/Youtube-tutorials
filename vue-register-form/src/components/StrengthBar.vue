<template>
  <div class="password-strength-bar">
    <span class="title">siła hasła:</span>
    <div class="password-strength">
      <span :style="passwordStrength" class="strength-color"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrengthBar',

  props: {
    value: {
      type: Number,
      required: true,
    },
  },

  computed: {
    passwordStrength() {
      if (this.value < 2) {
        return `width: ${0}%`;
      } else if (this.value >= 2 && this.value < 5) {
        return `width: ${20}%; background: red;`;
      } else if (this.value >= 5 && this.value < 8) {
        return `width: ${40}%; background: orange;`;
      } else if (this.value >= 8 && this.value < 10) {
        return `width: ${60}%; background: #c5fc91;`;
      } else if (this.value >= 10 && this.value < 12) {
        return `width: ${80}%; background: #4fd675;`;
      } else if (this.value >= 12) {
        return `width: ${100}%; background: #19ff00;`;
      }

      return true;
    },
  },
};
</script>

<style scoped>
.password-strength-bar {
  margin-top: 10px;
}

.title {
  font-size: 14px;
  color: #385a64;
}

.password-strength {
  height: 8px;
}

.strength-color {
  height: 100%;
  border-radius: 20px;
  display: block;
  transition: all 0.3s ease-in-out;
}
</style>
