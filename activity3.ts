type Locator = string;

class SystemRoleBasePage {
  readonly titleText: Locator;
  readonly descriptionText: Locator;
  readonly textmodeRadioButton: Locator;
  readonly minimalRadioButton: Locator;
  readonly commonCriteriaRadioButton: Locator;
  readonly kvmVirtualizationHostRadioButton: Locator;
  readonly helpButton: Locator;
  readonly releaseNotesButton: Locator;
  readonly abortButton: Locator;
  readonly backButton: Locator;
  readonly nextButton: Locator;

  constructor() {
    this.titleText = "system_role_title";
    this.descriptionText = "system_role_description";
    this.textmodeRadioButton = "textmode_radio_button";
    this.minimalRadioButton = "minimal_radio_button";
    this.commonCriteriaRadioButton = "common_criteria_radio_button";
    this.kvmVirtualizationHostRadioButton = "kvm_virtualization_host_radio_button";
    this.helpButton = "help_button";
    this.releaseNotesButton = "release_notes_button";
    this.abortButton = "abort_button";
    this.backButton = "back_button";
    this.nextButton = "next_button";
  }

  selectTextmode() {
    console.log(`selecting '${this.textmodeRadioButton}'`);
    console.log(`press '${this.nextButton}'`);
  }

  selectMinimal() {
    console.log(`selecting '${this.minimalRadioButton}'`);
    console.log(`press '${this.nextButton}'`);
  }

  selectCommonCriteria() {
    console.log(`selecting '${this.commonCriteriaRadioButton}'`);
    console.log(`press '${this.nextButton}'`);
  }

  selectKvmVirtualizationHost() {
    console.log(`selecting '${this.kvmVirtualizationHostRadioButton}'`);
    console.log(`press '${this.nextButton}'`);
  }
}

type GConstructor<T = {}> = new (...args: any[]) => T;

function SlesWithGnome<TBase extends GConstructor<SystemRoleBasePage>>(Base: TBase) {
  return class extends Base {
    readonly slesWithGnomeRadioButton: Locator = "sles_with_gnome_radio_button";

    selectSlesWithGnome() {
      console.log(`selecting '${this.slesWithGnomeRadioButton}'`);
      console.log(`press '${this.nextButton}'`);
    }
  }
}

function XenVirtualizationHost<TBase extends GConstructor<SystemRoleBasePage>>(Base: TBase) {
  return class extends Base {
    readonly xenVirtualizationHost: Locator = "xen_virtualization_host";

    selectXenVirtualizationHost() {
      console.log(`selecting '${this.xenVirtualizationHost}'`);
      console.log(`press '${this.nextButton}'`);
    }
  }
}

const sr1 = new SystemRoleBasePage();
sr1.selectTextmode();
sr1.selectMinimal();
sr1.selectCommonCriteria();
sr1.selectKvmVirtualizationHost();

const sr2 = new class extends SlesWithGnome(SystemRoleBasePage) { }();
sr2.selectSlesWithGnome();

const SlesWithGnomeXenVirtualizationHostSystemRolePage = XenVirtualizationHost(SlesWithGnome(SystemRoleBasePage));
const sr3 = new SlesWithGnomeXenVirtualizationHostSystemRolePage();
sr3.selectSlesWithGnome();
sr3.selectXenVirtualizationHost();
