<script>
import { TEXT, SELECT, TEXTAREA, DATE_PICKER, RADIO, PASSWORD } from "@/conf/uiTypes";
import { deepClone } from "@/utils";
export default {
  name: "EForm",
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ruleForm: {},
    };
  },
  created() {
    const { items, cards, rules } = this.config;

    // 绑定密码验证器 this
    for (let key in rules) {
      rules[key].forEach((rule) => {
        // 若该方法是全局方法，第二次bind会失效，因为bind只能绑定一次
        if (rule.validator) {
          rule.validator = rule.validator.bind(this);
        }
      });
    }

    if (cards) {
      cards.forEach((card) => {
        this.reactiveFields(card.children);
      });
    } else if (items) {
      this.reactiveFields(items);//修 bug
    }
  },
  methods: {
    // 做响应式 value
    reactiveFields(items) {
      if (!items) return;
      items.forEach((rows) => {
        rows.forEach((item) => {
          // this.ruleForm[item.key] = item.value 无法检测动态添加的 key
          // 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。
          this.$set(this.ruleForm, item.key, item.value);
        });
      });
    },
    // 渲染每一类型
    renderItems(item) {
      const { type } = item;
      const { ruleForm } = this;
      const attrs = item.attrs;
      switch (type) {
        case TEXT:
        case PASSWORD:
        case TEXTAREA:
          // attrs={attrs} 默认配置 如 placeholder
          return (
            <el-input
              attrs={attrs}
              v-model={ruleForm[item.key]}
              type={item.type}
            ></el-input>
          );
        case SELECT:
          return (
            <el-select v-model={ruleForm[item.key]}>
              {item.options.map((opt) => {
                return <el-option label={opt.label} value={opt.value}></el-option>;
              })}
            </el-select>
          );
        case DATE_PICKER:
          return (
            <el-date-picker
              v-model={ruleForm[item.key]}
              type={item.type}
              placeholder="选择日期"
            ></el-date-picker>
          );
        case RADIO:
          return item?.radios?.map((radio) => {
            return (
              <el-radio
                attrs={radio.attrs}
                v-model={ruleForm[item.key]}
                label={radio.label}
              >
                {radio.title}
              </el-radio>
            );
          });
      }
    },
    // 渲染列
    renderColumns(columns) {
      return columns.map((column) => {
        return (
          <el-col span={column.colSpan}>
            <el-form-item label={column.label} prop={column.key}>
              {this.renderItems(column)}
            </el-form-item>
          </el-col>
        );
      });
    },
    // 渲染行
    renderRows(rows) {
      return rows.map((row) => {
        return <el-row>{this.renderColumns(row)}</el-row>;
      });
    },
    // 渲染卡片
    renderCards(cards) {
      return cards.map((card) => {
        return (
          <el-card class="box-card" header={card.name}>
            {card.children && this.renderRows(card.children)}
          </el-card>
        );
      });
    },
    getData() {
      return deepClone(this.ruleForm)
    },
    // 重置表单
    resetForm() {
      this.$refs.form.resetFields();
    },
    // 贷款申请页数据
    doSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 传递给父组件
          return this.$emit("submit", deepClone(this.ruleForm));
        } else {
          return false;
        }
      });
    },
    // 角色创建页数据
    valid(callback) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          return callback(deepClone(this.ruleForm));
        } else {
          return false;
        }
      });
    },
  },
  render() {
    const { ruleForm, $scopedSlots: { btn }} = this;
    const { items, rules, cards } = this.config;
    return (
      <div class="form-box">
        <el-form ref="form" label-width="80px" attrs={{ model: ruleForm, rules }}>
          {cards ? this.renderCards(cards) : this.renderRows(items)}
        </el-form>
        <div class="btn-box">
          {btn ? (
            btn("btn")
          ) : (
            <div>
              <el-button type="danger" onClick={(e) => this.resetForm()}>
                重置
              </el-button>
              <el-button type="primary" onClick={(e) => this.doSubmit()}>
                申请
              </el-button>
            </div>
          )}
        </div>
      </div>
    );
  },
};
</script>

<style scoped>
.el-input,
.el-select,
.form-box .el-date-editor {
  width: 100%;
}

:deep(.el-card__header) {
  text-align: left;
}

.box-card {
  margin-bottom: 10px;
}
</style>
