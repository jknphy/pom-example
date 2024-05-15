type Locator = string;

class SystemRolePage {
  readonly titleText: Locator;
  readonly descriptionText: Locator;
  readonly slesWithGnomeRadioButton: Locator;
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
    this.slesWithGnomeRadioButton = "sles_with_gnome_radio_button";
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

  selectSlesWithGnome() {
    console.log(`selecting '${this.slesWithGnomeRadioButton}'`);
    console.log(`press '${this.nextButton}'`);
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

const systemRole = new SystemRolePage();
systemRole.selectSlesWithGnome();
systemRole.selectTextmode();
systemRole.selectMinimal();
systemRole.selectCommonCriteria();
systemRole.selectKvmVirtualizationHost();
